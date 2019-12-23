;;; ~/.config/doom/+ui.el -*- lexical-binding: t; -*-
;; _   _  _____  
;;| | | ||_   _| 
;;| | | |  | |   
;;| | | |  | |   
;;| |_| | _| |_  
;; \___/  \___/  
;;
;;
(setq doom-font (font-spec :family "Monaco" :size 18))
(load-theme 'base16-default-dark t)
(setq display-line-numbers-type nil)
(add-hook! 'shell-mode-hook 'ansi-color-for-comint-mode-on)
(display-time-mode 1)
(provide '+ui)
