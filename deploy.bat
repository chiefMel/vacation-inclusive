@echo off
cd /d "C:\path\to\your\project"

echo Adding changes...
git add .

echo Committing...
set /p msg=Enter commit message:
git commit -m "%msg%"

echo Pushing to GitHub...
git push origin main

echo Done!
pause
