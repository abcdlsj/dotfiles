;; _              _     _           _ _                 
;;| | _____ _   _| |__ (_)_ __   __| (_)_ __   __ _ ___ 
;;| |/ / _ \ | | | '_ \| | '_ \ / _` | | '_ \ / _` / __|
;;|   <  __/ |_| | |_) | | | | | (_| | | | | | (_| \__ \
;;|_|\_\___|\__, |_.__/|_|_| |_|\__,_|_|_| |_|\__, |___/
;;|___/                             |___/
;; 

;;设置mark-set
(global-set-key (kbd "M-m") 'set-mark-command)
;;happy hacking
(defun open-init-file()
  (interactive)
  (find-file "~/.emacs.d/init.el"))

(global-set-key (kbd "<f2>") 'open-init-file)

;;evil-leader
(evil-leader/set-leader "<SPC>")
(evil-leader/set-key
  "f" 'find-file
  "b" 'switch-to-buffer
  "k" 'kill-buffer
  "n" 'neotree-toggle
  "r" 'recentf-open-files
  "/" 'xref-find-definitions
 )

;;
(provide 'init-keybindings)
