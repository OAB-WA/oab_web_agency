# Netlify Deployment Guide

This guide will help you deploy your website to Netlify.

## Quick Start - Method 1: Drag & Drop (Easiest)

1. **Go to Netlify**: Visit [https://app.netlify.com](https://app.netlify.com)
2. **Sign up/Login**: Create a free account or login
3. **Deploy**: Drag and drop your entire `HTML` folder onto the Netlify dashboard
4. **Done!**: Your site will be live in seconds with a URL like `https://random-name-123.netlify.app`

## Method 2: Git-Based Deployment (Recommended)

### Step 1: Initialize Git Repository

```bash
cd /Users/mac/Desktop/HTML
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and create a new repository
2. Don't initialize it with a README
3. Copy the repository URL

### Step 3: Push to GitHub

```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

### Step 4: Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize Netlify
4. Select your repository
5. Netlify will auto-detect settings:
   - **Build command**: Leave empty (no build needed)
   - **Publish directory**: `.` (root directory)
6. Click **"Deploy site"**

### Step 5: Configure Custom Domain (Optional)

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the DNS configuration instructions

## Method 3: Netlify CLI

### Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Deploy

```bash
cd /Users/mac/Desktop/HTML
netlify login
netlify deploy
```

For production deployment:
```bash
netlify deploy --prod
```

## Contact Form Setup

All forms have been configured to use **Formspark**:

- ✅ Contact form (`contact.html`) - fully configured
- ✅ Quote form (`index.html`) - fully configured
- ✅ Quote form (`quote.html`) - fully configured
- ✅ JavaScript handlers added for all forms
- ✅ Honeypot spam protection added to all forms
- ✅ All form fields have proper `name` attributes

### Setup Formspark

1. **Sign up for Formspark**: Visit [https://formspark.io](https://formspark.io) and create a free account
2. **Create Forms**:
   - Create a form for contact submissions
   - Create a form for quote requests
3. **Get Form IDs**: Copy the form IDs from your Formspark dashboard
4. **Update Configuration**: 
   - Open `assets/js/master.js`
   - Find the `FORMSPARK_CONFIG` object (around line 247)
   - Replace `YOUR_CONTACT_FORM_ID` with your contact form ID
   - Replace `YOUR_QUOTE_FORM_ID` with your quote form ID

### View Form Submissions

1. Go to your Formspark dashboard at [https://formspark.io](https://formspark.io)
2. Click on your forms
3. View all submissions in real-time

### Email Notifications

Formspark automatically sends email notifications for form submissions:

1. Go to your Formspark dashboard
2. Click on a form
3. Navigate to **Settings** → **Notifications**
4. Configure email notifications (sent to your account email by default)
5. You can also set up webhooks or integrations

## Important Notes

### PHP Files
- Netlify **does not support PHP** server-side processing
- Your `contact-form.php` file won't work on Netlify
- The contact form has been converted to use Netlify Forms instead

### File Structure
- All your HTML files are in the root directory ✅
- Assets are in the `assets/` folder ✅
- `netlify.toml` configuration file is included ✅

### Build Settings
- **Build command**: (leave empty - no build process needed)
- **Publish directory**: `.` (root directory)

## Troubleshooting

### Form Not Working?
- Make sure you've updated the Formspark form IDs in `assets/js/master.js`
- Check browser console for errors
- Verify form submissions in your Formspark dashboard
- Ensure your Formspark forms are active and not deleted

### Images Not Loading?
- Check that image paths are relative (e.g., `assets/images/logo.png`)
- Ensure all files are committed to Git

### 404 Errors?
- Check that `netlify.toml` redirect rules are correct
- Verify file paths are correct

## Next Steps

1. ✅ Sign up for Formspark and create forms
2. ✅ Update form IDs in `assets/js/master.js`
3. ✅ Deploy to Netlify
4. ✅ Test your contact and quote forms
5. ✅ Configure email notifications in Formspark
6. ✅ Configure custom domain (optional)
7. ✅ Enable HTTPS (automatic with Netlify)

## Support

- Netlify Docs: [https://docs.netlify.com](https://docs.netlify.com)
- Netlify Community: [https://answers.netlify.com](https://answers.netlify.com)
