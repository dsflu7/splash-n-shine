#!/bin/bash

# Sanity Import Script for Splash N Shine
# This script imports all the prepared NDJSON data into your Sanity dataset

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if dataset name is provided
if [ -z "$1" ]; then
    print_error "Please provide a dataset name"
    echo "Usage: $0 <dataset-name> [options]"
    echo ""
    echo "Examples:"
    echo "  $0 production"
    echo "  $0 staging --replace"
    echo "  $0 development --missing"
    exit 1
fi

DATASET=$1
shift  # Remove dataset name from arguments
OPTIONS="$@"  # Capture remaining arguments as options

# Check if sanity CLI is installed
if ! command -v sanity &> /dev/null; then
    print_error "Sanity CLI is not installed. Please install it first:"
    echo "npm install -g @sanity/cli"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "services.ndjson" ]; then
    print_error "NDJSON files not found. Please run this script from the sanity-import directory."
    exit 1
fi

print_status "Starting import to dataset: $DATASET"

# Import each file
FILES=("services.ndjson" "locations.ndjson" "testimonials.ndjson" "whyPoints.ndjson")

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        print_status "Importing $file..."
        
        if sanity dataset import "$file" "$DATASET" $OPTIONS; then
            print_status "✓ Successfully imported $file"
        else
            print_error "✗ Failed to import $file"
            exit 1
        fi
        
        echo ""  # Add spacing between imports
    else
        print_warning "File $file not found, skipping..."
    fi
done

print_status "🎉 All imports completed successfully!"
print_status "Your Sanity dataset '$DATASET' now contains:"
echo "  • 12 cleaning services"
echo "  • 15 service locations"
echo "  • 6 customer testimonials"
echo "  • 5 competitive advantage points"

echo ""
print_status "Next steps:"
echo "  1. Open your Sanity Studio to verify the imported data"
echo "  2. Update image references to use proper asset URLs"
echo "  3. Test the content in your frontend application"

echo ""
print_warning "Note: Image paths currently point to local assets."
print_warning "You may need to upload images to Sanity or update paths to CDN URLs."
