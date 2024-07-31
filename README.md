# AI Trip Advisor

This repository contains the code for an AI-driven Trip Advisor, which generates customized trips with hotel recommendations and itineraries based on user budgets and travel preferences. Due to the use of Google Maps Places (NEW), Photos, and Geolocation APIs, this project has a restriction of staying under an expenditure of $200 monthly, hence no deployed link is provided.

## Features

- **Personalized Trips**: Generate trips tailored to your budget and travel choices.
- **Hotel Recommendations**: Get hotel suggestions that fit your itinerary.
- **Dynamic Itineraries**: Itineraries are created based on user preferences and budgets.

## Screenshots

![Screenshot 1](https://github.com/user-attachments/assets/1300f4a4-1a9e-409c-ba8a-46bca25721c0)
![Screenshot 2](https://github.com/user-attachments/assets/136b31f3-f3c9-4b31-a2de-3737d5109561)
![Screenshot 3](https://github.com/user-attachments/assets/8be09761-a8d1-4a0f-a365-425ddb4e688e)
![Screenshot 4](https://github.com/user-attachments/assets/b7dd2f12-291d-4645-9533-7cc5298ef6fe)
![Screenshot 5](https://github.com/user-attachments/assets/bd0cfefd-8aad-4b66-a516-58a899f86d3a)
![Screenshot 6](https://github.com/user-attachments/assets/c859c344-80fb-4222-8b06-f9225275189b)

## Getting Started

To run this project on your machine, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/ai-trip-advisor.git
    cd ai-trip-advisor
    ```

2. **Create a `.env.local` file in the root folder**:
    ```plaintext
    VITE_GOOGLE_PLACE_API_KEY=your_google_place_api_key
    VITE_GOOGLE_GEMINI_AI_API_KEY=your_google_gemini_ai_api_key
    VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
    FIREBASE_API_KEY=your_firebase_api_key
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the application**:
    ```bash
    npm run dev
    ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize and enhance the README file as per your project's requirements.
