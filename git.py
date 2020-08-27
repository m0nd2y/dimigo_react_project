import os

C_END = "\033[0m"
C_YELLOW = "\033[33m"
C_BOLD    = "\033[1m"


print(C_BOLD + C_YELLOW + "[+]" + C_END + "put commit : " )
commit = raw_input()

os.system("git add *")
commit_sh = "git commit -m '" + commit + "'"
print(commit_sh)
os.system(commit_sh)
os.system("git push")
