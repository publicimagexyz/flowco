# CapRover Deployment Guide

## ✅ Repository Prepared and Ready to Deploy!

All files have been committed to your local Git repository. You now need to push to GitHub to trigger the CapRover deployment.

---

## 🚀 Step 1: Push to GitHub

Since GitHub authentication needs to be configured, you have two options:

### **Option A: Push via SSH (Recommended)**

1. **Add SSH remote:**
   ```bash
   git remote set-url origin git@github.com:publicimagexyz/flowco.git
   ```

2. **Push to GitHub:**
   ```bash
   git push -u origin master
   ```

### **Option B: Push via HTTPS with Personal Access Token**

1. **Create a Personal Access Token on GitHub:**
   - Go to https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scopes: `repo`
   - Copy the token

2. **Push using token:**
   ```bash
   git push https://<YOUR_TOKEN>@github.com/publicimagexyz/flowco.git master
   ```

### **Option C: Configure Git Credential Manager**

```bash
git config --global credential.helper manager-core
git push -u origin master
```

---

## 🐳 Step 2: Configure CapRover App

Once the code is on GitHub, you need to set up the app in CapRover:

### **A. Via CapRover UI (Recommended for first deployment)**

1. **Login to your CapRover instance**
   ```
   https://captain.your-domain.com
   ```

2. **Create a new app:**
   - Go to "Apps" tab
   - Click "One-Click Apps/Databases" or "Create A New App"
   - Enter app name (e.g., `flowco`)
   - Check "Has Persistent Data" if needed

3. **Configure GitHub Integration:**
   - Go to your app's "Deployment" tab
   - Select "Method 3: Deploy from Github/Bitbucket/Gitlab"
   - Add Repository URL: `https://github.com/publicimagexyz/flowco`
   - Branch: `master`
   - Username: `publicimagexyz`
   - Add your GitHub credentials or Personal Access Token

4. **Enable HTTPS:**
   - Go to "HTTP Settings" tab
   - Enable HTTPS
   - Force HTTPS (optional)

5. **Configure Domain:**
   - Add your custom domain
   - Or use: `flowco.your-caprover-domain.com`

6. **Deploy:**
   - Click "Force Build" button in Deployment tab
   - Wait for build to complete (~3-5 minutes)

### **B. Via GitHub Actions (Automated CI/CD)**

If you want automatic deployments on every push, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to CapRover

on:
  push:
    branches: [ "master" ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Deploy to CapRover
        uses: caprover/deploy-from-github@v1.1.2
        with:
          server: '${{ secrets.CAPROVER_SERVER }}'
          app: '${{ secrets.APP_NAME }}'
          token: '${{ secrets.APP_TOKEN }}'
```

**Add these secrets to your GitHub repo:**
- `CAPROVER_SERVER`: https://captain.your-domain.com
- `APP_NAME`: flowco
- `APP_TOKEN`: (Generate in CapRover UI → App → Deployment → App Token)

---

## 📝 What's Been Configured

### **1. Captain Definition File (`captain-definition`)**

This file tells CapRover how to build your Next.js app:
- Uses Node.js 18 Alpine base image
- Multi-stage Docker build for optimization
- Standalone output for minimal production image
- Runs on port 3000

### **2. Next.js Configuration (`next.config.ts`)**

Updated with:
```typescript
output: 'standalone'  // Required for Docker deployment
```

### **3. Docker Ignore (`.dockerignore`)**

Prevents unnecessary files from being copied into the Docker image.

---

## 🔧 CapRover Configuration

### **Environment Variables (Optional)**

If you need environment variables, add them in CapRover UI:
- Go to App → App Configs → Environment Variables
- Add variables like:
  - `NODE_ENV=production`
  - `DATABASE_URL=...`
  - `API_KEY=...`

### **Persistent Data**

If you need persistent storage (unlikely for this static site):
- Enable "Has Persistent Data" when creating app
- Configure persistent paths in App Configs

### **Service Update Override**

For zero-downtime deployments:
```yaml
TaskTemplate:
  ContainerSpec:
    HealthCheck:
      Test: ["CMD", "wget", "--spider", "-q", "http://localhost:3000/"]
      Interval: 30000000000
      Timeout: 10000000000
      Retries: 3
UpdateConfig:
  Order: start-first
```

---

## 🎯 Deployment Checklist

- [x] Code committed to local Git
- [ ] GitHub remote configured
- [ ] Code pushed to GitHub
- [ ] CapRover app created
- [ ] GitHub integration configured in CapRover
- [ ] First deployment triggered
- [ ] HTTPS enabled
- [ ] Custom domain configured
- [ ] DNS pointed to CapRover server

---

## 🌐 After Deployment

Your site will be available at:
```
https://flowco.your-caprover-domain.com
```

Or your custom domain after DNS propagation.

---

## 🐛 Troubleshooting

### **Build Fails**

Check build logs in CapRover UI:
```bash
# Or via command line:
docker service logs srv-captain--flowco --since 60m
```

### **App Won't Start**

1. Check if port 3000 is exposed
2. Verify standalone build is working:
   ```bash
   npm run build
   ls -la .next/standalone/
   ```

3. Check CapRover app logs

### **Update Not Deploying**

Force rebuild in CapRover UI:
- Go to Deployment tab
- Click "Force Build"

---

## 📊 What's Deployed

### **Complete Website:**
- ✅ Home page
- ✅ 11 Treatment pages
- ✅ Team page
- ✅ Membership page
- ✅ Book Online page
- ✅ Privacy Policy
- ✅ HIPAA Notice

### **Features:**
- ✅ Tailwind CSS v4
- ✅ Responsive design
- ✅ Optimized images
- ✅ Fast navigation with prefetching
- ✅ Accessibility compliant
- ✅ Production-ready build

---

## 🔗 Useful Links

- **CapRover Documentation:** https://caprover.com/docs/
- **CapRover GitHub:** https://github.com/caprover/caprover
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Your GitHub Repo:** https://github.com/publicimagexyz/flowco

---

## 📞 Need Help?

If you encounter issues:
1. Check CapRover logs in the UI
2. Verify `captain-definition` syntax
3. Ensure Next.js builds locally: `npm run build`
4. Check Docker is running on CapRover server

---

**Ready to deploy! Just push to GitHub and CapRover will handle the rest.** 🚀

