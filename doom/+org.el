;;; ~/.config/doom/+org.el -*- lexical-binding: t; -*-
;; _____ ______  _____  
;;|  _  || ___ \|  __ \ 
;;| | | || |_/ /| |  \/ 
;;| | | ||    / | | __  
;;\ \_/ /| |\ \ | |_\ \ 
;; \___/ \_| \_| \____/ 
;;                      
(after! org
  :init
  (setq org-capture-templates nil)
  (setq org-agenda-files nil)
  (setq org-agenda-files (list "~/Dropbox/org/"))
  (setq org-agenda-file-regexp "\\`[^.].*\\.org\\|.todo\\'")
  (setq org-capture-templates
        '(
          ("t" "Task To Do!" entry
           (file+headline "~/Dropbox/org/task.org" "GTD")
           "* TODO %^{Task Name:}\n%u\n%a\n" :clock-in t :clock-resume t)
         ("r" "Book Reading Task" entry
          (file+headline "~/Dropbox/org/task.org" "Reading")
          "* TODO %^{Book Name:}\n%u\n%a\n" :clock-in t :clock-resume t)
         ("j" "Journal!!!" entry
          (file+olp+datetree "~/Dropbox/org/journal.org")
          "* %U - %^{heading} %^g\n %?\n" :tree-type week)
         ("n" "Notes!!!" entry
          (file+headline "~/Dropbox/org/notes.org" "NOTES")
          "* %U - %^{heading} %^g\n %?\n")
         )))

(use-package! elfeed-org
  :config
  (elfeed-org)
  (setq! rmh-elfeed-org-files (list "~/Dropbox/org/elfeed.org")))

(provide '+org)
