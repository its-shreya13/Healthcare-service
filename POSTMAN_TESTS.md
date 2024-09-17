# Postman Tests

## Endpoints Tested

### 1. Add Service
- **URL**: `http://localhost:3000/api/services`
- **Method**: POST
- **Request Body**:
  ```json
  {
   "name": "Consultation",
   "description": "General consultation with a doctor",
   "price": 700
  }

  {
    "name": "Chemotherapy",
    "description": "Drug therapy to kill or slow the growth of cancer cells",
    "price": 15000,
  }

### 2. GET ALL SERVICES
- **URL**: `http://localhost:3000/api/services`
- **Method**: GET

-Response Example
[
    {
        "_id": "66e9b733bcc5482e8f7cb067",
        "name": "Consultation",
        "description": "General consultation with a doctor",
        "price": 700,
        "__v": 0
    },
    {
        "_id": "66e9b84ebcc5482e8f7cb069",
        "name": "Chemotherapy",
        "description": "Drug therapy to kill or slow the growth of cancer cells",
        "price": 15000,
        "__v": 0
    },
    {
        "_id": "66e9b860bcc5482e8f7cb06b",
        "name": "Radiation Therapy",
        "description": "High-energy radiation treatment to destroy cancer cells",
        "price": 20000,
        "__v": 0
    }
]

### 3. UPDATE SERVICES
- **URL**: `http://localhost:3000/api/services/:id`
- **Method**: PUT
- Replace id with the actual ID of the service you want to update.
- Request body example 
{
  "name": "Updated Service Name",
  "description": "Updated description",
  "price": 1000
}

### 4. DELETE SERVICES
- **URL**: `http://localhost:3000/api/services/:id`
- **Method**: PUT
- Replace id with the actual ID of the service you want to delete.



