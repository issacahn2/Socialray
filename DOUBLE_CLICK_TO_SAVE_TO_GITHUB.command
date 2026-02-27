#!/bin/bash

# Move into the project directory
cd "/Users/ray/.gemini/antigravity/scratch/issac-agency-next"

echo "===================================================="
echo "   SOCIALRAY PROJECT SYNC (SAVE TO GITHUB)         "
echo "===================================================="
echo ""
echo "Attempting to send your latest changes to GitHub..."
echo "Your GitHub username is: issacahn2"
echo ""

# Run the push command
git push -u origin main

# Check if it succeeded
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Your project is now safely saved on GitHub."
    echo "You can now go to Vercel.com and deploy the site."
else
    echo ""
    echo "❌ FAILED (Authentication Required)"
    echo "If it asked for a password and then failed, you need a 'Personal Access Token'."
    echo ""
    echo "1. Go to: https://github.com/settings/tokens"
    echo "2. Generate a token (classic) with 'repo' permissions."
    echo "3. Copy that token and use it as your password when running this again."
fi

echo ""
echo "----------------------------------------------------"
echo "You can close this window now."
read -p "Press [Enter] to exit..."
