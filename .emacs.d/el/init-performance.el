;;
;; ____            __                                           
;;|  _ \ ___ _ __ / _| ___  _ __ _ __ ___   __ _ _ __   ___ ___ 
;;| |_) / _ \ '__| |_ / _ \| '__| '_ ` _ \ / _` | '_ \ / __/ _ \
;;|  __/  __/ |  |  _| (_) | |  | | | | | | (_| | | | | (_|  __/
;;|_|   \___|_|  |_|  \___/|_|  |_| |_| |_|\__,_|_| |_|\___\___|
;;
;;
(require 'recentf)
(recentf-mode 1)
(setq recentf-max-menu-item 10)
(setq org-src-fontify-natively t)
(setq inital-scratch-message nil)
(tool-bar-mode -1)
(global-linum-mode 1)
(setq inhibit-startup-screen t)
(setq frame-title-format "%b  [%I] %f  GNU/Emacs")
(setq visible-bell t)
(setq  ring-bell-function 'ignore)
(setq-default cursor-type 'bar)
(set-face-attribute 'default nil :height 140)
(global-hl-line-mode 1)
(show-paren-mode 1)
(setq make-backup-files nil)
(electric-pair-mode t)
(delete-selection-mode 1)
(fset 'yes-or-no-p 'y-or-n-p)
;;DOOM
;; Global settings (defaults)
(setq doom-themes-enable-bold t    ; if nil, bold is universally disabled
      doom-themes-enable-italic t) ; if nil, italics is universally disabled
;; Load the theme (doom-one, doom-molokai, etc); keep in mind that each theme
;; may have their own settings.
(load-theme 'doom-one t)
;; Enable flashing mode-line on errors
(doom-themes-visual-bell-config)
;; Enable custom neotree theme (all-the-icons must be installed!)
(doom-themes-neotree-config)
;; or for treemacs users
(setq doom-themes-treemacs-theme "doom-colors") ; use the colorful treemacs theme
(doom-themes-treemacs-config)
;; Corrects (and improves) org-mode's native fontification.
(doom-themes-org-config)

;;company-mode
(global-company-mode 1)

;;evil
(require 'evil)
(evil-mode 1)
(require 'evil-leader)
(global-evil-leader-mode 1)

;;doom-modline
(require 'doom-modeline)
(doom-modeline-mode 1)

;;neotree
(require 'neotree)

;;all-the-icons
(require 'all-the-icons)

;;popwin
(require 'popwin)
(popwin-mode 1)

;;smartparens
(require 'smartparens-config)

;;ivy
(ivy-mode 1)

;;smooth-scrolling
(require 'smooth-scrolling)
(smooth-scrolling-mode 1)

;;hungry-delete
(require 'hungry-delete)
(global-hungry-delete-mode)

;;lsp-mode
(require 'lsp-mode)
;;(add-hook 'c++-mode-hook #'lsp)
(require 'lsp-ui)
(add-hook 'lsp-mode-hook 'lsp-ui-mode)
(require 'company-lsp)
(push 'company-lsp company-backends)
(require 'ccls)
(setq ccls-executable "/usr/bin/ccls")
(use-package lsp-mode :commands lsp)
(use-package lsp-ui :commands lsp-ui-mode)
(use-package company-lsp :commands company-lsp)

(use-package ccls
  :hook ((c-mode c++-mode objc-mode cuda-mode) .
         (lambda () (require 'ccls) (lsp))))

;;yasnippet
(require 'yasnippet)
(yas-global-mode 1)

;;
(provide 'init-performance)
