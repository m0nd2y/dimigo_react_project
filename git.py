import os
print("input commit ")
commit = raw_input()
os.system("git add *")
commit_sh = "git commit -m '" + commit + "'"
print(commit_sh)
os.system(commit_sh)
os.system("git push")
