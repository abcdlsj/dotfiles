;;; ~/.config/doom/+ui.el -*- lexical-binding: t; -*-
;; _   _  _____  
;;| | | ||_   _| 
;;| | | |  | |   
;;| | | |  | |   
;;| |_| | _| |_  
;; \___/  \___/  
;;;
(setq doom-font (font-spec :family "Monaco" :size 18))
(load-theme 'base16-default-dark t)
(setq display-line-numbers-type nil)
(add-hook! 'shell-mode-hook 'ansi-color-for-comint-mode-on)
(display-time-mode 1)
(set-frame-parameter (selected-frame) 'alpha '(95 100))
(add-to-list 'default-frame-alist (cons 'alpha '(95 100)))
(provide '+ui)
