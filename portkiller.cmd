@echo off
for /f "tokens=5" %%a in ('netstat -aon ^| find ":1212" ^| find "LISTENING"') do taskkill /f /pid %%a
pause
exit
