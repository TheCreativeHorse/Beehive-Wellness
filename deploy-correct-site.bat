@echo off
REM Deploy to the correct Netlify site: bookings.beehivewellness.ca
REM This script ensures deployment goes to the right domain

echo 🚀 Deploying to bookings.beehivewellness.ca...

REM Check if we're in the right directory
if not exist "netlify.toml" (
    echo ❌ Error: netlify.toml not found. Make sure you're in the project root.
    exit /b 1
)

REM Build the project
echo 📦 Building project...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed. Please fix errors and try again.
    exit /b 1
)

REM Deploy using Netlify CLI (if available)
where netlify >nul 2>nul
if %errorlevel% equ 0 (
    echo 🌐 Deploying with Netlify CLI...
    netlify deploy --prod --site=bookings.beehivewellness.ca
) else (
    echo ⚠️  Netlify CLI not found. Please:
    echo 1. Install Netlify CLI: npm install -g netlify-cli
    echo 2. Login: netlify login
    echo 3. Link to correct site: netlify link --site=bookings.beehivewellness.ca
    echo 4. Deploy: netlify deploy --prod
)

echo ✅ Deployment process completed!
echo 🔗 Check your site at: https://bookings.beehivewellness.ca
pause

