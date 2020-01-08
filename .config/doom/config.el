;;; .config/doom/config.el -*- lexical-binding: t; -*-
;;___  ___ _____  _   _  _____  _____  _____  _   _ ______  _____  _____
;;|  \/  ||_   _|| \ | ||  ___|/  __ \|  _  || \ | ||  ___||_   _||  __ \
;;| .  . |  | |  |  \| || |__  | /  \/| | | ||  \| || |_     | |  | |  \/
;;| |\/| |  | |  | . ` ||  __| | |    | | | || . ` ||  _|    | |  | | __
;;| |  | | _| |_ | |\  || |___ | \__/\\ \_/ /| |\  || |     _| |_ | |_\ \
;;\_|  |_/ \___/ \_| \_/\____/  \____/ \___/ \_| \_/\_|     \___/  \____/
;;
;; Place your private configuration here
(load! "+org")
(load! "+bindings")
(load! "+ui")
(load! "+functions")

(setq user-full-name "abcdlsj"
      user-mail-address "lisongjianshuai@gmail.com")
(use-package! modern-cpp-font-lock
  :hook (c++-mode . modern-c++-font-lock-mode))
(use-package! lsp-mode :commands lsp)
(use-package! lsp-ui :commands lsp-ui-mode)
(use-package! company-lsp :commands company-lsp)
(use-package! ccls
  :config
  (setq ccls-executable "/usr/bin/ccls")
  (setq ccls-sem-highlight-method 'font-lock))
(use-package! company-lsp
  :config
  (push 'company-lsp company-backend))

(use-package! hide-mode-line
  :load-path "~/.emacs.d/.local/elpa/hide-mode-line"
  :config
  (add-hook! 'completion-list-mode-hook #'hide-mode-line-mode)
  (add-hook! 'neotree-mode-hook #'hide-mode-line-mode))
;; EAF setting
;;(use-package eaf
;;  :load-path "~/.emacs.d/.local/elpa/emacs-application-framework"
;;  :custom
;;  (eaf-find-alternate-file-in-dired t)
;;  :config
;;  (eaf-bind-key scroll_up "RET" eaf-pdf-viewer-keybinding)
;;  (eaf-bind-key scroll_down_page "DEL" eaf-pdf-viewer-keybinding)
;;  (eaf-bind-key scroll_up "C-n" eaf-pdf-viewer-keybinding)
;;  (eaf-bind-key scroll_down "C-p" eaf-pdf-viewer-keybinding)
;;  (eaf-bind-key take_photo "p" eaf-camera-keybinding))
(use-package! sly
  :config
  (setq inferior-lisp-program "/usr/bin/sbcl"))

(use-package google-c-style
  :after c-mode
  :hook
  (c-mode-common-hook . google-set-c-style)
  (c-mode-common-hook . google-make-newline-indent))
