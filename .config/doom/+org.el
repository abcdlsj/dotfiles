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
                         '("t" "Task To Do!" entry
                           (file+headline "~/Dropbox/org/task.org" "GTD")
                           "* TODO %^{Task Name:}\n%u\n%a\n" :clock-in t :clock-resume t)))
(after! org (add-to-list 'org-capture-templates
                         '("r" "Book Reading Task" entry
                           (file+headline "~/Dropbox/org/task.org" "Reading")
                           "* TODO %^{Book Name:}\n%u\n%a\n" :clock-in t :clock-resume t)))
(after! org (add-to-list 'org-capture-templates
                         '("j" "Journal!!!" entry
                           (file+olp+datetree "~/Dropbox/org/journal.org")
                           "* %U - %^{heading} %^g\n %?\n" :tree-type week)))
(after! org (add-to-list 'org-capture-templates
                         '("n" "Notes!!!" entry
                           (file+headline "~/Dropbox/org/notes.org" "NOTES")
                           "* %U - %^{heading} %^g\n %?\n")))

(use-package! org-page
  :config
  (setq op/repository-directory "~/GithubPro/abcdlsj.github.io")
  (setq op/site-domain "https://abcdlsj.github.io")
  (setq op/personal-github-link "https://github.com/abcdlsj") ; if you want to show a personal github link
  (setq op/site-main-title "ABCDLSJ'S WORLD")
  (setq op/site-sub-title "=========>>享受专注")
  (setq op/personal-disqus-shortname "abcdlsj")
  (setq op/repository-org-branch "source")
  (setq op/repository-html-branch "master")
  (setq op/theme 'mdo))

(provide '+org)
