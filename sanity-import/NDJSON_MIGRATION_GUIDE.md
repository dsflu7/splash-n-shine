# Sanity NDJSON Migration Guide

This guide provides step-by-step instructions for converting local TypeScript data files to Sanity-compatible NDJSON format for bulk import using the Sanity CLI.

## Overview

NDJSON (Newline Delimited JSON) is the format required for bulk importing data into Sanity. Each line contains a complete JSON object representing a document.

## Prerequisites

1. Sanity CLI installed: `npm install -g @sanity/cli`
2. Sanity project configured with proper schemas
3. Local data files with TypeScript/JavaScript data structures
4. Static assets (images) in your project

## Step 1: Analyze Your Data Structure

### Identify Data Types
Look for data exports in your project, typically in:
- `src/lib/data/` folder
- `data/` folder
- Individual component files

Common data types to migrate:
- Services/Products
- Locations
- Testimonials/Reviews
- Team members
- FAQ items
- Blog posts

### Example Data Structure Analysis
```typescript
// src/lib/data/services.ts
export const services = [
  {
    id: 'service-1',
    title: 'Service Title',
    slug: 'service-slug',
    description: 'Service description',
    images: ['/assets/services/service-1/1.webp'],
    benefits: ['Benefit 1', 'Benefit 2'],
    cities: ['City 1', 'City 2']
  }
];
```

## Step 2: Understand Sanity Schema Requirements

### Document Structure
Each Sanity document needs:
- `_id`: Unique identifier (string)
- `_type`: Document type matching your schema
- Additional fields as defined in your schema

### Common Field Types
- **Text fields**: Direct string mapping
- **Slug fields**: `{"_type": "slug", "current": "slug-value"}`
- **Images**: Special handling required (see Step 4)
- **Arrays**: Direct array mapping for simple types
- **Objects**: Nested object structure

## Step 3: Create NDJSON Files

### File Naming Convention
- `services.ndjson` - for service documents
- `locations.ndjson` - for location documents  
- `testimonials.ndjson` - for testimonial documents
- `all-data.ndjson` - combined file (optional)

### Basic Document Structure
```json
{"_id": "unique-document-id", "_type": "schemaType", "field1": "value1", "field2": ["array", "values"]}
```

### Example Conversion
**Original TypeScript:**
```typescript
{
  id: 'house-cleaning',
  title: 'House Cleaning Service',
  slug: 'house-cleaning',
  description: 'Professional house cleaning',
  images: ['/assets/services/house-cleaning/1.webp'],
  benefits: ['Clean home', 'Save time']
}
```

**Converted NDJSON:**
```json
{"_id": "service_house-cleaning", "_type": "service", "title": "House Cleaning Service", "slug": {"_type": "slug", "current": "house-cleaning"}, "description": "Professional house cleaning", "images": [{"_type": "image", "_sanityAsset": "image@file:///absolute/path/to/static/assets/services/house-cleaning/1.webp"}], "benefits": ["Clean home", "Save time"]}
```

## Step 4: Handle Images Correctly

### Critical Image Requirements
1. **Never use relative paths** - Sanity requires absolute file paths
2. **Use _sanityAsset format** - Required for proper asset import
3. **Verify file existence** - Ensure all referenced images exist

### Image Conversion Process

**Original format:**
```typescript
images: ['/assets/services/service-name/image.webp']
```

**Sanity format:**
```json
"images": [{"_type": "image", "_sanityAsset": "image@file:///absolute/path/to/project/static/assets/services/service-name/image.webp"}]
```

### Image Path Rules
- Use `file://` protocol with absolute paths
- Include the full project path: `/home/username/project/static/assets/...`
- Maintain the same directory structure as your static assets
- Each image is an object with `_type: "image"` and `_sanityAsset` properties

### Verify Image Files Exist
Before creating NDJSON, verify all referenced images exist:
```bash
find static/assets -name "*.webp" -o -name "*.jpg" -o -name "*.png"
```

## Step 5: Handle Complex Field Types

### Slug Fields
```json
"slug": {"_type": "slug", "current": "slug-value"}
```

### Rich Text/Portable Text
For complex text with formatting, use Sanity's Portable Text format:
```json
"content": [{"_type": "block", "children": [{"_type": "span", "text": "Your content here"}]}]
```

### Reference Fields
For document references:
```json
"category": {"_type": "reference", "_ref": "category_id"}
```

### Arrays of Objects
```json
"faqItems": [
  {"question": "Question text", "answer": "Answer text"},
  {"question": "Question 2", "answer": "Answer 2"}
]
```

## Step 6: Validate NDJSON Format

### Format Requirements
- One JSON object per line
- No trailing commas
- Proper JSON escaping for quotes
- No empty lines between objects

### Validation Tools
```bash
# Check if each line is valid JSON
while IFS= read -r line; do echo "$line" | jq . > /dev/null || echo "Invalid JSON: $line"; done < your-file.ndjson

# Count documents
wc -l *.ndjson
```

## Step 7: Create Import Script

### Import Script Template
```bash
#!/bin/bash

# Set your Sanity project details
PROJECT_ID="your-project-id"
DATASET="production"  # or "development"

echo "Starting Sanity data import..."

# Import each data type
echo "Importing services..."
sanity dataset import services.ndjson $DATASET --project $PROJECT_ID --replace

echo "Importing locations..."
sanity dataset import locations.ndjson $DATASET --project $PROJECT_ID --replace

echo "Importing testimonials..."
sanity dataset import testimonials.ndjson $DATASET --project $PROJECT_ID --replace

echo "Import completed!"
```

### Make Script Executable
```bash
chmod +x import.sh
```

## Step 8: Execute Import

### Pre-import Checklist
- [ ] All NDJSON files validated
- [ ] All referenced images exist
- [ ] Sanity schemas match document structure
- [ ] Project ID and dataset configured correctly
- [ ] Backup existing data if replacing

### Run Import
```bash
./import.sh
```

### Monitor Import
- Watch for error messages
- Verify document counts in Sanity Studio
- Check that images are properly uploaded
- Validate data integrity in Studio

## Common Issues and Solutions

### Image Import Failures
**Problem**: Images not importing
**Solution**: 
- Verify absolute paths are correct
- Check file permissions
- Ensure files exist at specified paths
- Use `file://` protocol

### Invalid JSON Errors
**Problem**: NDJSON parsing fails
**Solution**:
- Validate each line with `jq`
- Check for unescaped quotes
- Remove trailing commas
- Ensure proper UTF-8 encoding

### Schema Mismatches
**Problem**: Fields rejected during import
**Solution**:
- Compare NDJSON structure with Sanity schema
- Ensure required fields are present
- Check field type compatibility
- Validate slug format

### Large File Handling
**Problem**: Import timeouts or memory issues
**Solution**:
- Split large files into smaller chunks
- Import data types separately
- Use `--replace` flag carefully
- Monitor system resources

## Best Practices

### Data Organization
1. **Consistent IDs**: Use predictable ID patterns (`type_identifier`)
2. **Logical Grouping**: Separate data types into different files
3. **Asset Management**: Organize images in clear directory structures
4. **Version Control**: Keep NDJSON files in version control

### Performance Optimization
1. **Batch Size**: Keep files under 100MB for optimal performance
2. **Asset Optimization**: Compress images before import
3. **Network**: Ensure stable internet connection for asset uploads
4. **Monitoring**: Watch import progress and system resources

### Data Validation
1. **Pre-import Testing**: Test with small datasets first
2. **Schema Validation**: Ensure schemas are deployed before import
3. **Data Integrity**: Verify all required fields are present
4. **Rollback Plan**: Have a plan to revert if needed

## Example Project Structure

```
project-root/
├── sanity-import/
│   ├── services.ndjson
│   ├── locations.ndjson
│   ├── testimonials.ndjson
│   ├── all-data.ndjson
│   ├── import.sh
│   └── README.md
├── static/
│   └── assets/
│       ├── services/
│       ├── locations/
│       └── team/
└── src/
    └── lib/
        └── data/
            ├── services.ts
            ├── locations.ts
            └── testimonials.ts
```

## Troubleshooting Checklist

When imports fail, check:
- [ ] Sanity CLI is authenticated (`sanity login`)
- [ ] Project ID is correct
- [ ] Dataset exists and is accessible
- [ ] Schemas are deployed to target dataset
- [ ] All image files exist at specified paths
- [ ] NDJSON format is valid (no syntax errors)
- [ ] Required fields are present in each document
- [ ] Field types match schema definitions
- [ ] No duplicate document IDs
- [ ] Sufficient permissions for dataset operations

## Additional Resources

- [Sanity CLI Documentation](https://www.sanity.io/docs/cli)
- [NDJSON Specification](http://ndjson.org/)
- [Sanity Import/Export](https://www.sanity.io/docs/importing-data)
- [Sanity Asset Management](https://www.sanity.io/docs/assets)

---

Remember: Always test your import process with a development dataset before importing to production!
