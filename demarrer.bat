@echo off
cd /d "%~dp0"
echo Node version:
node -v
echo.
echo Demarrage avec le Angular CLI LOCAL du projet...
call npm start
pause
