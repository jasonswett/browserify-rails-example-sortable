Rails.application.routes.draw do
  resources :presidents

  root 'presidents#index'
end
