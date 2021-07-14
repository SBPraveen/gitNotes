/*
|| Git Notes
    ?1. git --version
        gives the current version of git

    ?2. git config --global user.name sbpraveen
        Allows us to set the username

    ?3. git config --global user.email praveen.sb@unifo.in
        Allows us to set the user email

    ?4. git config user.name
        returns the username

    ?5. git config user.email
        returns the user email

    ?6. dir
        Shows a list of directories in that path

    ?7. cd ..
        Goes one folder back in the path

    ?8. mkdir test
        Creates a new folder called test

    ?9. rmdir test
        Deletes a folder called test

    ?10. repos
        A repo is a container for our project which will be will tracked by git

    ?11. commits
        commits are like savePoints in video games. It basically allows us to go back to the previous savepoints

    ?12. 
            *Modified Stage
    (Changed files that are not commited)
                |
            *Staging Area
    (Add any changed file to staging that youu want to commit)
                |
            *Committed
    (Any files in the staging area are added to the commit when we make one )

    ?13. git init 
        git init intializes an empty git repository in that path. After this a .git folder will be created

    ?14. git status
        Shows our current branch, files that we have changed etc.

    ?15. git add .
        To add all the file that were changed into the staging area
                        or
        use || git add fileName || to add a particular file to the styaging area
        
    ?16. git rm --cached fileName
        If we have added a file by mistake and we want to remove from the staging area 

    ?17. git commit -m " anyMessage "
        All the changed files are now commited

    ?18. git log 
        shows us the history of commits we have made

    ?19. git log --oneline
        shows us the history of commits in a condesed way(one line)

    ?20. Rewind or undo commits:
            This can be done using:
                git checkout commit => safest
                git revert commit => ok
                git reset commit => dangerous Be careful
            
            let the commits be as follows
                af61hbh added latestcommit
                51dsv61 added 4thcommit
                qeib566 added 3rdcommit
                sv2sdv3 added 2ndcommit
                5dvs62a added 1stcommit

        ! Here the commit code can be obtained using the git log --oneline

        ?1. git checkout commitCode
            Has the ability to take us back to the particular commit
            *Read Only. 
            
        
        ?2. git checkout master
            Shows the latest version of the code (af61hbh added latestcommit)
    
        ?3. git revert commitCode
            When we do this we get a text editor so type => :wq and press enter 
            Eg: 
                git commit qeib566
                The features that were present in that particular commit(qeib566) will be deleted but the commit history will still have "qeib566 added 3rdcommit" so that if we want we can go back to it in future
                Now if we do git log we will get :
                    cjv1sv5 reverted 3rdcommit
                    af61hbh added latestcommit
                    51dsv61 added 4thcommit
                    qeib566 added 3rdcommit
                    sv2sdv3 added 2ndcommit
                    5dvs62a added 1stcommit
            
        ?4. git reset commitCode 
            All the commit that are present after that particular commit will be deleted from the history 
            *But the code will remain intact(No change in comparison with the latest code)
            
        ?5. git reset commitCode --hard
            All the commit that are present after that particular commit will be deleted from the history but the code will also be deleted (not same as the latest)
            ! Code will be permanently deleted

    ?21. Branches
        creating new branches allows us to test new code in an isolated environment without affecting the present code .
        If we dont like the new code we can delete the branch Thus the master remains safe
        -----o------o-------o------------------------o---------MASTER
                            |                        |
                            |____o___________o_______|  NEW BRANCH

        O => commits

    ?22. git branch branchName
        Creates a new branch 

    ?23. git branch -a 
        Displays the list of branches that are present
        The branch that is in green color and has a star is the current branch

    ?24. git checkout branchName/master
        Allows us to work in that particular branch

    ?25. git branch -d branchName
        Deletes the branch only if it is merged

    ?26. git branch -D branchName
        Deletes the branch even if the branch is not merged

    ?27. git checkout -b branchName
        Creates a new branch and also checkouts to that branch

     ?28. git merge branchName
        If we want to merge the feature1 branch with the master branch then go to the master branch using the " git checkout master " command and then use the above command
    
    ?29.  Merge conflict
        After the commit if the code we wrote conflicts with someone else code then we get a merge conflict. In such a case after the commit resolve the conflict by changing the code then execute the following command
            git add .
            git commit  (No need " git commmit branchName ")
            In the cmd prompt type " :wq " and press enter

    ?30. git remote add origin url
        Using this command the url gets stored in the origin so that during push we need not type the url everytime instead we can use origin
        
    ?31. git push -u origin main
        allows us to push code to the remote repo master branch( since we have specified main we can also specify other branches)
        and the origin specifies the address of the remote repo
        Here we have pushed to the master branch but we can also push to some other branch Eg:
            git push origin branchName

    ?32. git clone url
        allows us to have a local copy of the code present in the remote repo -> url
        *NOTE: If we clone a repo we need not do "git reomte add origin url"
        
    ?33. git pull origin main
        Allows us to pull code from a remote repo => origin 
        Before pulling checkout to that branch
        We can also pull from some other branch. Instead of main give the branchName

    ?34. Forking
        Forking allows us to copy public repops from someone's else account to our account and contribute to them.
        To fork a repo press the "Fork" button on the right corner after that clone the repo as usual to work on them
        Once we have completed our contribution push as usual 
        The changes will be made in our account not on the main repo.
        So in our repo click 'create pull request' 
        You will not be able to merge since we are not the owners
        

    
    

*/