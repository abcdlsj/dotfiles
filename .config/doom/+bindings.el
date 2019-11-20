;;; ~/.config/doom/+bindings.el -*- lexical-binding: t; -*-
;;______  _____  _   _ ______  _____  _   _  _____  _____ 
;;| ___ \|_   _|| \ | ||  _  \|_   _|| \ | ||  __ \/  ___|
;;| |_/ /  | |  |  \| || | | |  | |  |  \| || |  \/\ `--. 
;;| ___ \  | |  | . ` || | | |  | |  | . ` || | __  `--. \
;;| |_/ / _| |_ | |\  || |/ /  _| |_ | |\  || |_\ \/\__/ /
;;\____/  \___/ \_| \_/|___/   \___/ \_| \_/ \____/\____/ 
;;                                                        
(map!
 ;; Easier window navigation
 :n "C-j"   #'evil-window-left
 :n "C-k"   #'evil-window-down
 :n "C-i"   #'evil-window-up
 :n "C-l"   #'evil-window-right)

(provide '+bindings)
