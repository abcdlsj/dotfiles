;;                                    __ _                       _   _             
;; _ __ ___  _   _    ___ ___  _ __  / _(_) __ _ _   _ _ __ __ _| |_(_) ___  _ __  
;;| '_ ` _ \| | | |  / __/ _ \| '_ \| |_| |/ _` | | | | '__/ _` | __| |/ _ \| '_ \ 
;;| | | | | | |_| | | (_| (_) | | | |  _| | (_| | |_| | | | (_| | |_| | (_) | | | |
;;|_| |_| |_|\__, |  \___\___/|_| |_|_| |_|\__, |\__,_|_|  \__,_|\__|_|\___/|_| |_|
;;           |___/                         |___/                                   

(package-initialize)

(add-to-list 'load-path "~/.emacs.d/el/")
(add-to-list 'load-path "~/.emacs.d/elp/")

(require 'init-packages)
(require 'init-performance)
(require 'init-keybindings)
(require 'my-org)
