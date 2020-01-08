;;; ~/.config/doom/+bindings.el -*- lexical-binding: t; -*-
;;______  _____  _   _ ______  _____  _   _  _____  _____ 
;;| ___ \|_   _|| \ | ||  _  \|_   _|| \ | ||  __ \/  ___|
;;| |_/ /  | |  |  \| || | | |  | |  |  \| || |  \/\ `--. 
;;| ___ \  | |  | . ` || | | |  | |  | . ` || | __  `--. \
;;| |_/ / _| |_ | |\  || |/ /  _| |_ | |\  || |_\ \/\__/ /
;;\____/  \___/ \_| \_/|___/   \___/ \_| \_/ \____/\____/ 
;;
(map! :leader
      "nt" 'neotree-toggle
      ;"l" 'centaur-tabs-backward
      ;"r" 'centaur-tabs-forward
      "oc" 'counsel-org-capture
      "vt" 'vterm-toggle
      )
(use-package! winum
  :config
  (winum-mode t)
  (map! :leader
        "0" 'winum-select-window-0
        "1" 'winum-select-window-1
        "2" 'winum-select-window-2
        "3" 'winum-select-window-3
        "4" 'winum-select-window-4))

(provide '+bindings)
