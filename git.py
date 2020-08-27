import os

#color setting
C_END = "\033[0m"
C_YELLOW = "\033[33m"
C_BOLD    = "\033[1m"

#git add
os.system("git add *")
while(1) :
    print(C_BOLD + C_YELLOW + "[+]" + C_END + "resetting commit?  [Y,N]")
    answer = raw_input()
    if(answer == "N") :
        #commit
        print(C_BOLD + C_YELLOW + "[+]" + C_END + "committing......")
        commit_sh = "git commit -m 'commit'"
        os.system(commit_sh)

        #push
        print(C_BOLD + C_YELLOW + "[+]" + C_END + "pushing......")
        os.system("git push")
        print(C_BOLD + C_YELLOW + "[+]" + C_END + "done")
        break;

    elif(answer == "Y") :
        print(C_BOLD + C_YELLOW + "[+]" + C_END + "put commit : " )
        commit = raw_input()

        #commit
        print(C_BOLD + C_YELLOW + "[+]" + C_END + "committing......")
        commit_sh = "git commit -m '" + commit + "'"
        os.system(commit_sh)

        #push
        print(C_BOLD + C_YELLOW + "[+]" + C_END + "pushing......")
        os.system("git push")
        print(C_BOLD + C_YELLOW + "[+]" + C_END + "done")
        break;

    else :
        print(C_BOLD + C_YELLOW + "[+]" + C_END + "wrong input..")
        



