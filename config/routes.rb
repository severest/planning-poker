Rails.application.routes.draw do
  root 'home#index'
  get '*path', to: 'home#index', constaints: lambda { |req|
    req.path.exclude? 'cable'
  }
end
