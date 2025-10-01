# How to Push to GitHub

## ✅ Your code is ready and committed!

The repository is configured and all changes are committed. You just need to authenticate and push.

---

## 🚀 Option 1: Push via SSH (Recommended)

If you have SSH keys set up:

```bash
git remote set-url origin git@github.com:publicimagexyz/flowco.git
git push -u origin master
```

---

## 🔑 Option 2: Push with Personal Access Token

### Step 1: Create a Personal Access Token

1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "FlowCo Deploy"
4. Select scopes: ✅ `repo` (Full control of private repositories)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)

### Step 2: Push using the token

Replace `YOUR_TOKEN_HERE` with your actual token:

```bash
git push https://YOUR_TOKEN_HERE@github.com/publicimagexyz/flowco.git master
```

Or set it as the remote:

```bash
git remote set-url origin https://YOUR_TOKEN_HERE@github.com/publicimagexyz/flowco.git
git push -u origin master
```

---

## 🔐 Option 3: Use Git Credential Manager (Windows)

```bash
git config --global credential.helper manager-core
git push -u origin master
```

This will open a browser window for GitHub authentication.

---

## 📋 Quick Commands Reference

### Check current status:
```bash
git status
git remote -v
```

### If you need to reconfigure:
```bash
# Remove existing remote
git remote remove origin

# Add new remote (HTTPS)
git remote add origin https://github.com/publicimagexyz/flowco.git

# Or SSH
git remote add origin git@github.com:publicimagexyz/flowco.git

# Push
git push -u origin master
```

---

## ✅ After Successful Push

Once pushed, your CapRover will automatically deploy when you:

1. Configure the app in CapRover UI
2. Connect the GitHub repository
3. Click "Force Build"

The deployment will use the `captain-definition` file to build your Next.js app!

---

## 🐛 Troubleshooting

### "Authentication failed"
- Make sure your Personal Access Token has `repo` scope
- Check that the token hasn't expired

### "Permission denied (publickey)"
- You need to add your SSH key to GitHub
- Go to https://github.com/settings/keys
- Or use HTTPS with token instead

### "Remote already exists"
```bash
git remote remove origin
git remote add origin https://github.com/publicimagexyz/flowco.git
```

---

## 🎯 What Happens After Push

1. Code will be on GitHub ✅
2. CapRover will detect the `captain-definition` file
3. Docker will build your Next.js app using multi-stage build
4. App will be deployed on port 3000
5. Nginx will route traffic to your app

**Your website will be live!** 🚀

