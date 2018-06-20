Rails.application.routes.draw do
  root to: 'dashboard#show'

  devise_for :users
  get 'users', to: redirect('users/sign_up')

  get 'books/search', to: 'books#index'
end
