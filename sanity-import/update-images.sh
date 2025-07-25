#!/bin/bash

# Script to update image paths in services.ndjson to use Sanity asset format
# This converts from "/assets/services/..." to proper _sanityAsset format

BASE_PATH="/home/devnull03/work/comissions/splash-n-shine/static"

# Create a backup
cp services.ndjson services.ndjson.backup

# Process the file line by line
while IFS= read -r line; do
    # Extract the service ID to know which directory to reference
    service_id=$(echo "$line" | grep -o '"_id":"service_[^"]*"' | cut -d'"' -f4 | sed 's/service_//')
    
    # Update image paths based on the service
    case $service_id in
        "full-house-cleaning")
            echo "$line" | sed 's|"/assets/services/full-house-cleaning/1\.webp"|{"_type": "image", "_sanityAsset": "image@file:///home/devnull03/work/comissions/splash-n-shine/static/assets/services/full-house-cleaning/1.webp"}|g' | \
            sed 's|"/assets/services/full-house-cleaning/2\.webp"|{"_type": "image", "_sanityAsset": "image@file:///home/devnull03/work/comissions/splash-n-shine/static/assets/services/full-house-cleaning/2.webp"}|g' | \
            sed 's|"/assets/services/full-house-cleaning/3\.webp"|{"_type": "image", "_sanityAsset": "image@file:///home/devnull03/work/comissions/splash-n-shine/static/assets/services/full-house-cleaning/3.webp"}|g' | \
            sed 's|"/assets/services/full-house-cleaning/4\.webp"|{"_type": "image", "_sanityAsset": "image@file:///home/devnull03/work/comissions/splash-n-shine/static/assets/services/full-house-cleaning/4.webp"}|g'
            ;;
        "roof-cleaning")
            echo "$line" | sed 's|"/assets/services/roof-cleaning/1\.webp"|{"_type": "image", "_sanityAsset": "image@file:///home/devnull03/work/comissions/splash-n-shine/static/assets/services/roof-cleaning/1.webp"}|g' | \
            sed 's|"/assets/services/roof-cleaning/2\.webp"|{"_type": "image", "_sanityAsset": "image@file:///home/devnull03/work/comissions/splash-n-shine/static/assets/services/roof-cleaning/2.webp"}|g'
            ;;
        "roof-painting")
            echo "$line" | sed 's|"/assets/services/roof-painting/1\.webp"|{"_type": "image", "_sanityAsset": "image@file:///home/devnull03/work/comissions/splash-n-shine/static/assets/services/roof-painting/1.webp"}|g' | \
            sed 's|"/assets/services/roof-painting/2\.webp"|{"_type": "image", "_sanityAsset": "image@file:///home/devnull03/work/comissions/splash-n-shine/static/assets/services/roof-painting/2.webp"}|g'
            ;;
        "commercial-cleaning")
            echo "$line" | sed 's|"/assets/services/commercial-cleaning/1\.webp"|{"_type": "image", "_sanityAsset": "image@file:///home/devnull03/work/comissions/splash-n-shine/static/assets/services/commercial-cleaning/1.webp"}|g' | \
            sed 's|"/assets/services/commercial-cleaning/2\.webp"|{"_type": "image", "_sanityAsset": "image@file:///home/devnull03/work/comissions/splash-n-shine/static/assets/services/commercial-cleaning/2.webp"}|g' | \
            sed 's|"/assets/services/commercial-cleaning/3\.webp"|{"_type": "image", "_sanityAsset": "image@file:///home/devnull03/work/comissions/splash-n-shine/static/assets/services/commercial-cleaning/3.webp"}|g'
            ;;
        *)
            # For services that reference other image paths, update them accordingly
            echo "$line" | sed 's|"/assets/services/\([^/]*\)/\([^"]*\)"|{"_type": "image", "_sanityAsset": "image@file:///home/devnull03/work/comissions/splash-n-shine/static/assets/services/\1/\2"}|g'
            ;;
    esac
done < services.ndjson.backup > services.ndjson.updated

# Replace the original file
mv services.ndjson.updated services.ndjson

echo "✅ Updated services.ndjson with proper Sanity asset paths"
echo "📁 Backup saved as services.ndjson.backup"
