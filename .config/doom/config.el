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
(after! format
  (set-formatter!
    'clang-format
    '("clang-format"
      ("-assume-filename=%S" (or (buffer-file-name) ""))
      "-style=Google"))
  :modes
  '((c-mode ".c")
    (c++-mode ".cpp")
    (java-mode ".java")
    (objc-mode ".m")
    ))

(after! centaur-tabs
  :config
  (setq centaur-tabs-style "zigzag")
  (setq centaur-tabs-height 22)
  (setq centaur-tabs-set-icons t))
