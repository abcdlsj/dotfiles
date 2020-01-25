;;; ~/.config/doom/+ui.el -*- lexical-binding: t; -*-
;; _   _  _____  
;;| | | ||_   _| 
;;| | | |  | |   
;;| | | |  | |   
;;| |_| | _| |_  
;; \___/  \___/  
;;;
(load-theme 'doom-one t)
;;(load-theme 'base16-default-dark t)
(setq display-line-numbers-type nil)
(add-hook! 'shell-mode-hook 'ansi-color-for-comint-mode-on)
(display-time-mode 1)
(set-frame-parameter (selected-frame) 'alpha '(95 100))
(add-to-list 'default-frame-alist (cons 'alpha '(95 100)))
(setq fancy-splash-image "~/.config/doom/banner/ue-colorful.png")
(set-face-attribute
 'default nil
 :font (font-spec :name "-APPL-Monaco-normal-normal-normal-*-*-*-*-*-*-0-iso10646-1"
                  :weight 'normal
                  :slant 'normal
                  :size 12.5))
(when (display-graphic-p)
  (dolist (charset '(kana han symbol cjk-misc bopomofo))
    (set-fontset-font
     (frame-parameter nil 'font)
     charset
     (font-spec :name "-WQYF-文泉驿等宽微米黑-normal-normal-normal-*-*-*-*-*-*-0-iso10646-1"
                :weight 'normal
                :slant 'normal
                :size 15.0))))

(provide '+ui)
