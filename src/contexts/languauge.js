import { createContext } from 'react'

export const localizeСontext = createContext({
    en : {
        username : 'username',
        notFoundPage : 'Not Found Page',
        addReview : 'Add a review for',
        deliveryApp : 'Delivery App',
        restaurants : 'Restaurants',
        selectRestaurants : 'Please select a restaurant',
        notExistRestaurant : 'Non existing restaurant',
        showReview : 'Show review',
        hideReview : 'Hide review',
    },
    ru : {
        username : 'имя пользователя',
        notFoundPage : 'Страница не найдена',
        addReview : 'Добавьте ревью для',
        deliveryApp : 'Приложение доставки',
        restaurants : 'Рестораны',
        selectRestaurants : 'Пожалуйста, выберите ресторан',
        notExistRestaurant : 'Несуществующий ресторан',
        showReview : 'Показать отзывы',
    }
});
export const { Provider, Consumer } = localizeСontext;
