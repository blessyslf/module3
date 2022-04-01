Rails.application.routes.draw do
  resources :groups
  resources :events
  resources :playlists
  resources :tracks
  resources :kyrs
  resources :courses
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  get 'main/index'
  get 'lending/index'
  get 'styleguide/index'


  resources :posts do
      resources :comments
      resources :likes
      resources :favorites
  end

  resources :tracks do
      resources :favorites
  end

  resources :playlists do
      resources :favorites
  end

  resources :events do
  	resources :comments
  end

get 'users', to: 'users#index'
get 'users/:id' => 'users#show', :as => :user
delete 'users/:id', to: 'users#destroy'

get 'tracks/index'
get 'playlists/index'

get 'events/index'
get 'groups/index'

  get 'posts/index'


  root 'main#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
