import os

#color setting
C_END = "\033[0m"
C_YELLOW = "\033[33m"
C_BOLD    = "\033[1m"

#git add
os.system("git add *")

print(C_BOLD + C_YELLOW + "[+]" + C_END + "put commit : " )
commit = raw_input()

#commit
commit_sh = "git commit -m '" + commit + "'"
os.system(commit_sh)

#push
os.system("git push")
