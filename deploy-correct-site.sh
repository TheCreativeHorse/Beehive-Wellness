#!/bin/bash

# Deploy to the correct Netlify site: bookings.beehivewellness.ca
# This script ensures deployment goes to the right domain

echo "🚀 Deploying to bookings.beehivewellness.ca..."

# Check if we're in the right directory
if [ ! -f "netlify.toml" ]; then
    echo "❌ Error: netlify.toml not found. Make sure you're in the project root."
    exit 1
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

# Deploy using Netlify CLI (if available)
if command -v netlify &> /dev/null; then
    echo "🌐 Deploying with Netlify CLI..."
    netlify deploy --prod --site=bookings.beehivewellness.ca
else
    echo "⚠️  Netlify CLI not found. Please:"
    echo "1. Install Netlify CLI: npm install -g netlify-cli"
    echo "2. Login: netlify login"
    echo "3. Link to correct site: netlify link --site=bookings.beehivewellness.ca"
    echo "4. Deploy: netlify deploy --prod"
fi

echo "✅ Deployment process completed!"
echo "🔗 Check your site at: https://bookings.beehivewellness.ca"

