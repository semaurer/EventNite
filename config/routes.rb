Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :events, only: [:index, :create, :show, :destroy, :update]
    resources :tickets, only: [:index, :create]
    resources :categories, only: [:index, :create]
    get "events/categories/:id" => 'events#category_filter'
  end
end
