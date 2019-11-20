;;; ~/.config/doom/+org.el -*- lexical-binding: t; -*-
;; _____ ______  _____  
;;|  _  || ___ \|  __ \ 
;;| | | || |_/ /| |  \/ 
;;| | | ||    / | | __  
;;\ \_/ /| |\ \ | |_\ \ 
;; \___/ \_| \_| \____/ 
;;                      
(after! org (setq org-directory "/home/abcdlsj/Dropbox/org/"))
(after! org (setq org-capture-templates nil))
(after! org (add-to-list 'org-capture-templates
                         '("t" "TODO!!!" entry
                           (file+headline "~/Dropbox/org/task.org" "GTD")
                           "* TODO %^{任务名}\n%u\n%a\n" :clock-in t :clock-resume t)))
(after! org (add-to-list 'org-capture-templates
                         '("r" "Book Reading Task" entry
                           (file+headline "~/Dropbox/org/task.org" "Reading")
                           "* TODO %^{书名}\n%u\n%a\n" :clock-in t :clock-resume t)))
(after! org (add-to-list 'org-capture-templates
                         '("j" "Journal" entry
                           (file+weektree+prompt "~/Dropbox/org/journal.org")
                           "* %U - %^{heading}\n  %?")))
(after! org (add-to-list 'org-capture-templates
                         '("i" "Inbox/anythings" entry
                           (file "~/Dropbox/org/inbox.org")
                           "* %U - %^{heading} %^g\n %?\n")))
(after! org (add-to-list 'org-capture-templates
                         '("n" "Notes!!!" entry
                           (file+headlin "~/Dropbox/org/notes.org" "NOTES")
                           "* %^{heading} %t %^g\n  %?\n")))
(provide '+org)
