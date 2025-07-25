# Sanity Import Data for Splash N Shine

This directory contains NDJSON (Newline Delimited JSON) files ready for importing into your Sanity project. Each file corresponds to a specific document type in your Sanity schema.

## Files Included

- `services.ndjson` - 12 cleaning service documents
- `locations.ndjson` - 15 location documents covering Vancouver area
- `testimonials.ndjson` - 6 customer testimonials
- `whyPoints.ndjson` - 5 "why choose us" points

## Prerequisites

1. Make sure you have the Sanity CLI installed:
   ```bash
   npm install -g @sanity/cli
   ```

2. Ensure your Sanity project has the correct schema types configured:
   - `service` - for cleaning services
   - `location` - for service locations
   - `testimonial` - for customer reviews
   - `whyPoint` - for competitive advantages

## Import Instructions

### Option 1: Import Individual Files

Import each file separately to your dataset:

```bash
# Import services
sanity dataset import services.ndjson <your-dataset-name>

# Import locations
sanity dataset import locations.ndjson <your-dataset-name>

# Import testimonials
sanity dataset import testimonials.ndjson <your-dataset-name>

# Import why points
sanity dataset import whyPoints.ndjson <your-dataset-name>
```

### Option 2: Import All Files

You can combine all files into one and import everything at once:

```bash
# Combine all files (on Linux/Mac)
cat services.ndjson locations.ndjson testimonials.ndjson whyPoints.ndjson > all-data.ndjson

# Import the combined file
sanity dataset import all-data.ndjson <your-dataset-name>
```

### Option 3: Create a Tarball (Recommended for asset handling)

If you plan to add images later, create a tarball:

```bash
# Create a tarball
tar -czf splash-n-shine-data.tar.gz *.ndjson

# Import the tarball
sanity dataset import splash-n-shine-data.tar.gz <your-dataset-name>
```

## Import Options

### Replace Existing Data
If you want to overwrite existing documents with the same IDs:
```bash
sanity dataset import services.ndjson <your-dataset-name> --replace
```

### Skip Existing Documents
If you want to only import new documents and skip existing ones:
```bash
sanity dataset import services.ndjson <your-dataset-name> --missing
```

### Allow Failing Assets
If you have asset references that might fail:
```bash
sanity dataset import services.ndjson <your-dataset-name> --allow-failing-assets
```

## Data Structure Overview

### Services
Each service includes:
- Title and description
- SEO-optimized slug
- Images array (currently local paths)
- Benefits and key features
- Served cities
- FAQ items
- Location-specific information

### Locations
Each location includes:
- Name and SEO slug
- Location-specific FAQ items
- Google Maps embed URL

### Testimonials
Each testimonial includes:
- Customer name
- Review text

### Why Points
Each why point includes:
- Title
- Description explaining the benefit

## Asset Handling

The current image paths in the services data point to local assets (`/assets/services/...`). You have a few options:

1. **Upload images to Sanity**: Use the Sanity asset uploader and update the image references
2. **Use CDN URLs**: Replace local paths with CDN URLs
3. **Import with assets**: Create a proper tarball structure with assets included

### To include assets in import:

1. Create an `assets` directory structure matching your current paths
2. Place images in the correct subdirectories
3. Create a tarball including both data and assets:
   ```bash
   tar -czf complete-import.tar.gz *.ndjson assets/
   ```

## Verification

After importing, verify your data in Sanity Studio:

1. Check that all document types are created
2. Verify that references between documents work correctly
3. Ensure all required fields are populated
4. Test that slugs are properly generated

## Schema Requirements

Make sure your Sanity schema includes these types with the following required fields:

### Service Type
```javascript
{
  name: 'service',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'shortDescription', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'images', type: 'array', of: [{ type: 'string' }] },
    { name: 'benefits', type: 'array', of: [{ type: 'string' }] },
    { name: 'keyFeatures', type: 'array', of: [{ type: 'string' }] },
    { name: 'cities', type: 'array', of: [{ type: 'string' }] },
    { name: 'faqItems', type: 'array', of: [{ type: 'object' }] }
  ]
}
```

### Location Type
```javascript
{
  name: 'location',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'faqItems', type: 'array', of: [{ type: 'object' }] },
    { name: 'mapEmbedUrl', type: 'string' }
  ]
}
```

### Testimonial Type
```javascript
{
  name: 'testimonial',
  type: 'document',
  fields: [
    { name: 'author', type: 'string' },
    { name: 'testimonial', type: 'string' }
  ]
}
```

### Why Point Type
```javascript
{
  name: 'whyPoint',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'desc', type: 'string' }
  ]
}
```

## Troubleshooting

### Common Issues

1. **Schema mismatch**: Ensure your Sanity schema matches the data structure
2. **Dataset not found**: Make sure you're importing to the correct dataset name
3. **Permission errors**: Ensure you have write permissions to the dataset
4. **Asset errors**: Use `--allow-failing-assets` if image paths are not yet set up

### Getting Help

If you encounter issues during import:

1. Check the Sanity CLI documentation
2. Verify your schema definitions
3. Test with a small subset of data first
4. Use the `--dry-run` flag to preview the import without making changes

```bash
sanity dataset import services.ndjson <your-dataset-name> --dry-run
```

## Next Steps

After successful import:

1. Update image references to use Sanity assets or CDN URLs
2. Set up any additional content relationships
3. Configure content validation rules
4. Set up publishing workflows if needed
5. Test the content in your frontend application
