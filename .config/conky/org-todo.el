(require 'org)
(setq org-directory nil)
(setq org-capture-templates nil)
(setq org-agenda-files (list "~/Arch/home/abcdlsj/Dropbox/org/"))
(setq org-agenda-file-regexp "\\`[^.].*\\.org\\|.todo\\'")
(setq org-capture-templates
      '(
	("t" "Task To Do!" entry
	 (file+headline "~/Arch/home/abcdlsj/Dropbox/org/task.org" "GTD")
	 "* TODO %^{Task Name:}\n%u\n%a\n" :clock-in t :clock-resume t)
	("r" "Book Reading Task" entry
	 (file+headline "~/Arch/home/abcdlsj/Dropbox/org/task.org" "Reading")
	 "* TODO %^{Book Name:}\n%u\n%a\n" :clock-in t :clock-resume t)
	("j" "Journal!!!" entry
	 (file+olp+datetree "~/Arch/home/abcdlsj/Dropbox/org/journal.org")
	 "* %U - %^{heading} %^g\n %?\n" :tree-type week)
	("n" "Notes!!!" entry
	 (file+headline "~/Arch/home/abcdlsj/Dropbox/org/notes.org" "NOTES")
	 "* %U - %^{heading} %^g\n %?\n")))
