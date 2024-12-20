# ExpressJS Backend Project

## Setup Instructions

1. Clone the repository:
    ```sh
    git clone https://github.com/Vikaash17/News_App_Backend.git
    cd your-repo
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    PORT=3000
    DB_URI=your_database_uri
    ```

4. Start the server:
    ```sh
    npm start
    ```

## API Usage

### Endpoints

#### GET /api/items
- Description: Retrieve a list of items.
- Response:
    ```json
    [
        {
            "id": 1,
            "name": "Item 1",
            "description": "Description of Item 1"
        },
        {
            "id": 2,
            "name": "Item 2",
            "description": "Description of Item 2"
        }
    ]
    ```

#### POST /api/items
- Description: Create a new item.
- Request Body:
    ```json
    {
        "name": "New Item",
        "description": "Description of the new item"
    }
    ```
- Response:
    ```json
    {
        "id": 3,
        "name": "New Item",
        "description": "Description of the new item"
    }
    ```

#### PUT /api/items/:id
- Description: Update an existing item.
- Request Body:
    ```json
    {
        "name": "Updated Item",
        "description": "Updated description of the item"
    }
    ```
- Response:
    ```json
    {
        "id": 1,
        "name": "Updated Item",
        "description": "Updated description of the item"
    }
    ```

#### DELETE /api/items/:id
- Description: Delete an item.
- Response:
    ```json
    {
        "message": "Item deleted successfully"
    }
    ```

## License

This project is licensed under the MIT License.
