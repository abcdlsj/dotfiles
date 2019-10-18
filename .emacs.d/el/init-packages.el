;;                  _
;; _ __   __ _  ___| | ____ _  __ _  ___ 
;;| '_ \ / _` |/ __| |/ / _` |/ _` |/ _ \
;;| |_) | (_| | (__|   < (_| | (_| |  __/
;;| .__/ \__,_|\___|_|\_\__,_|\__, |\___|
;;|_|                         |___/
;;
(when (>= emacs-major-version 24)
    (require 'package)
    (package-initialize)
    (setq package-archives '(("gnu"   . "http://elpa.emacs-china.org/gnu/")
			 ("melpa" . "http://elpa.emacs-china.org/melpa/"))))

;; cl - Common Lisp Extension
(require 'cl)

;; Add Packages
(defvar abcdlsj/packages '(
			   ;; --- Auto-completion ---
			   company
			   ;; --- Better Editor ---
			   smooth-scrolling
			   hungry-delete
			   ;;swiper
			   ;;counsel
			   smartparens
			   popwin
			   evil
			   neotree
			   ;; --- Major Mode ---
			   markdown-mode
			   lsp-mode
			   ;;lsp
			   company-lsp
			   lsp-ui
			   ccls
			   yasnippet
			   ;;use-package
			   use-package
			   ;;theme
			   doom-themes
			   doom-modeline
			   ))

;; ...
(setq package-selected-packages abcdlsj/packages)

(defun abcdlsj/packages-installed-p ()
  (loop for pkg in abcdlsj/packages
	when (not (package-installed-p pkg)) do (return nil)
	finally (return t)))

(unless (abcdlsj/packages-installed-p)
  (message "%s" "Refreshing package database...")
  (package-refresh-contents)
  (dolist (pkg abcdlsj/packages)
    (when (not (package-installed-p pkg))
      (package-install pkg))))

;; 文件末尾
(provide 'init-packages)
