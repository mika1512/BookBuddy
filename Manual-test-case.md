# Test Cases

## Category

### Create New Category

1. **Test Case**: Verify that the category name field accepts a valid category name (e.g., "Science Fiction").
   - **Input**: "Science Fiction"
   - **Expected Result**: Category created successfully.

2. **Test Case**: Verify that the category name field does not accept an empty string.
   - **Input**: ""
   - **Expected Result**: Error message displayed indicating the category name cannot be empty.

3. **Test Case**: Verify that the category name field does not accept only whitespace.
   - **Input**: " "
   - **Expected Result**: Error message displayed indicating the category name cannot be only whitespace.

4. **Test Case**: Verify that the category name field accepts a name with leading and trailing spaces and trims them.
   - **Input**: " History "
   - **Expected Result**: Category created successfully as "History".

5. **Test Case**: Verify that the category name field does not accept special characters.
   - **Input**: "Rom@ntic"
   - **Expected Result**: Error message displayed indicating special characters are not allowed.

6. **Test Case**: Verify that the category name field accepts a name with numbers.
   - **Input**: "History101"
   - **Expected Result**: Category created successfully.

7. **Test Case**: Verify that the category name field accepts a name with mixed case letters.
   - **Input**: "ScienceFiction"
   - **Expected Result**: Category created successfully.

8. **Test Case**: Verify that the category name field accepts a name with hyphens and underscores.
   - **Input**: "Sci-Fi_Fantasy"
   - **Expected Result**: Category created successfully.

9. **Test Case**: Verify that the category name field does not accept a name that exceeds the maximum length limit (e.g., 255 characters).
   - **Input**: "a" * 256
   - **Expected Result**: Error message displayed indicating the category name is too long.

10. **Test Case**: Verify that the category name field accepts the maximum allowed length (e.g., 255 characters).
    - **Input**: "a" * 255
    - **Expected Result**: Category created successfully.

11. **Test Case**: Verify that the category name field does not accept SQL injection attempts.
    - **Input**: "Science Fiction; DROP TABLE Categories;"
    - **Expected Result**: Error message displayed indicating invalid input.

12. **Test Case**: Verify that the category name field handles XSS attempts.
    - **Input**: "<script>alert('XSS')</script>"
    - **Expected Result**: Error message displayed indicating invalid input.

13. **Test Case**: Verify that the category name field accepts a name in different languages.
    - **Input**: "科学小说" (Chinese for Science Fiction)
    - **Expected Result**: Category created successfully.

14. **Test Case**: Verify that the category name field handles unicode characters properly.
    - **Input**: "Sci🌟Fi"
    - **Expected Result**: Error message displayed indicating the invalid character.

15. **Test Case**: Verify that the category name field rejects excessively repetitive characters.
    - **Input**: "a" * 300
    - **Expected Result**: Error message displayed indicating the category name is too long.

16. **Test Case**: Verify that the category name creation process logs the action for auditing purposes.
    - **Input**: "Fantasy"
    - **Expected Result**: Category created successfully and action logged.

17. **Test Case**: Verify that the category name field handles leading numeric characters correctly.
    - **Input**: "2020Literature"
    - **Expected Result**: Error message displayed indicating the category name should start with numbers.

18. **Test Case**: Verify that the category name field does not accept HTML tags.
    - **Input**: "<b>Biography</b>"
    - **Expected Result**: Error message displayed indicating invalid input.

## Product

### Type a New Book Name When Adding a New Book

1. **Test Case**: Verify that the book name field accepts a valid book name.
   - **Input**: "To Kill a Mockingbird"
   - **Expected Result**: Book name accepted successfully.

2. **Test Case**: Verify that the book name field does not accept an empty string.
   - **Input**: ""
   - **Expected Result**: Error message displayed indicating the book name cannot be empty.

3. **Test Case**: Verify that the book name field does not accept only whitespace.
   - **Input**: " "
   - **Expected Result**: Error message displayed indicating the book name cannot be only whitespace.

4. **Test Case**: Verify that the book name field accepts a name with leading and trailing spaces and trims them.
   - **Input**: " The Great Gatsby "
   - **Expected Result**: Book name accepted as "The Great Gatsby".

5. **Test Case**: Verify that the book name field accepts special characters typically used in titles.
   - **Input**: "Harry Potter & the Philosopher's Stone"
   - **Expected Result**: Book name accepted successfully.

6. **Test Case**: Verify that the book name field accepts a name with numbers.
   - **Input**: "1984"
   - **Expected Result**: Book name accepted successfully.

7. **Test Case**: Verify that the book name field accepts a name with mixed case letters.
   - **Input**: "Pride and Prejudice"
   - **Expected Result**: Book name accepted successfully.

8. **Test Case**: Verify that the book name field accepts a name with hyphens and underscores.
   - **Input**: "The Catcher-in-the-Rye"
   - **Expected Result**: Book name accepted successfully.

9. **Test Case**: Verify that the book name field does not accept a name that exceeds the maximum length limit (e.g., 255 characters).
   - **Input**: "a" * 256
   - **Expected Result**: Error message displayed indicating the book name is too long.

10. **Test Case**: Verify that the book name field accepts the maximum allowed length (e.g., 255 characters).
    - **Input**: "a" * 255
    - **Expected Result**: Book name accepted successfully.

11. **Test Case**: Verify that the book name field does not accept duplicate book names if duplicates are not allowed.
    - **Input**: "To Kill a Mockingbird" (when "To Kill a Mockingbird" already exists)
    - **Expected Result**: Error message displayed indicating the book name already exists.

12. **Test Case**: Verify that the book name field is case-insensitive when checking for duplicates if duplicates are not allowed.
    - **Input**: "to kill a mockingbird" (when "To Kill a Mockingbird" already exists)
    - **Expected Result**: Error message displayed indicating the book name already exists.

13. **Test Case**: Verify that the book name field does not accept SQL injection attempts.
    - **Input**: "The Great Gatsby; DROP TABLE Books;"
    - **Expected Result**: Error message displayed indicating invalid input.

14. **Test Case**: Verify that the book name field handles XSS attempts.
    - **Input**: "<script>alert('XSS')</script>"
    - **Expected Result**: Error message displayed indicating invalid input.

15. **Test Case**: Verify that the book name field accepts names in different languages.
    - **Input**: "百年孤独" (Chinese for "One Hundred Years of Solitude")
    - **Expected Result**: Book name accepted successfully.

16. **Test Case**: Verify that the book name field handles unicode characters properly.
    - **Input**: "Café on the Edge of the World"
    - **Expected Result**: Book name accepted successfully.

17. **Test Case**: Verify that the book name field handles excessively repetitive characters correctly.
    - **Input**: "a" * 300
    - **Expected Result**: Error message displayed indicating the book name is too long.

18. **Test Case**: Verify that the book name field logs the book name input action for auditing purposes.
    - **Input**: "Moby Dick"
    - **Expected Result**: Book name accepted successfully and action logged.

19. **Test Case**: Verify that the book name field handles leading numeric characters correctly.
    - **Input**: "2021: A Space Odyssey"
    - **Expected Result**: Book name accepted successfully.

20. **Test Case**: Verify that the book name field does not accept HTML tags.
    - **Input**: "<b>The Hobbit</b>"
    - **Expected Result**: Error message displayed indicating invalid input.

### Type a New Book’s Author Name When Adding a New Book

1. **Test Case**: Verify that the author name field accepts a valid author name.
   - **Input**: "Harper Lee"
   - **Expected Result**: Author name accepted successfully.

2. **Test Case**: Verify that the author name field does not accept an empty string.
   - **Input**: ""
   - **Expected Result**: Error message displayed indicating the author name cannot be empty.

3. **Test Case**: Verify that the author name field does not accept only whitespace.
   - **Input**: " "
   - **Expected Result**: Error message displayed indicating the author name cannot be only whitespace.

4. **Test Case**: Verify that the author name field accepts a name with leading and trailing spaces and trims them.
   - **Input**: " J.K. Rowling "
   - **Expected Result**: Author name accepted as "J.K. Rowling".

5. **Test Case**: Verify that the author name field accepts special characters typically used in names.
   - **Input**: "O'Reilly"
   - **Expected Result**: Author name accepted successfully.

6. **Test Case**: Verify that the author name field accepts a name with hyphens.
   - **Input**: "Jean-Paul Sartre"
   - **Expected Result**: Author name accepted successfully.

7. **Test Case**: Verify that the author name field accepts a name with mixed case letters.
   - **Input**: "Mark Twain"
   - **Expected Result**: Author name accepted successfully.

8. **Test Case**: Verify that the author name field does not accept a name that exceeds the maximum length limit (e.g., 255 characters).
   - **Input**: "a" * 256
   - **Expected Result**: Error message displayed indicating the author name is too long.

9. **Test Case**: Verify that the author name field accepts the maximum allowed length (e.g., 255 characters).
    - **Input**: "a" * 255
    - **Expected Result**: Author name accepted successfully.

10. **Test Case**: Verify that the author name field does not accept duplicate author names if duplicates are not allowed.
    - **Input**: "George Orwell" (when "George Orwell" already exists)
    - **Expected Result**: Error message displayed indicating the author name already exists.

11. **Test Case**: Verify that the author name field is case-insensitive when checking for duplicates if duplicates are not allowed.
    - **Input**: "george orwell" (when "George Orwell" already exists)
    - **Expected Result**: Error message displayed indicating the author name already exists.

12. **Test Case**: Verify that the author name field does not accept SQL injection attempts.
    - **Input**: "George Orwell; DROP TABLE Authors;"
    - **Expected Result**: Error message displayed indicating invalid input.

13. **Test Case**: Verify that the author name field handles XSS attempts.
    - **Input**: "<script>alert('XSS')</script>"
    - **Expected Result**: Error message displayed indicating invalid input.

14. **Test Case**: Verify that the author name field accepts names in different languages.
    - **Input**: "村上 春樹" (Japanese for Haruki Murakami)
    - **Expected Result**: Author name accepted successfully.

15. **Test Case**: Verify that the author name field handles unicode characters properly.
    - **Input**: "Gabriel García Márquez"
    - **Expected Result**: Author name accepted successfully.

16. **Test Case**: Verify that the author name field handles excessively repetitive characters correctly.
    - **Input**: "a" * 300
    - **Expected Result**: Error message displayed indicating the author name is too long.

17. **Test Case**: Verify that the author name field logs the author name input action for auditing purposes.
    - **Input**: "F. Scott Fitzgerald"
    - **Expected Result**: Author name accepted successfully and action logged.

18. **Test Case**: Verify that the author name field handles leading numeric characters correctly.
    - **Input**: "123Author Name"
    - **Expected Result**: Author name accepted successfully.

19. **Test Case**: Verify that the author name field does not accept HTML tags.
    - **Input**: "<b>Charles Dickens</b>"
    - **Expected Result**: Error message displayed indicating invalid input.

20. **Test Case**: Verify that the author name field accepts names with titles.
    - **Input**: "Dr. Seuss"
    - **Expected Result**: Author name accepted successfully.

### Type a New Book Publish Year When Adding a New Book

1. **Test Case**: Verify that the publish year field accepts a valid year.
   - **Input**: "2020"
   - **Expected Result**: Publish year accepted successfully.

2. **Test Case**: Verify that the publish year field does not accept an empty string.
   - **Input**: ""
   - **Expected Result**: Error message displayed indicating the publish year cannot be empty.

3. **Test Case**: Verify that the publish year field does not accept non-numeric characters.
   - **Input**: "Two Thousand Twenty"
   - **Expected Result**: Error message displayed indicating the publish year must be a numeric value.

4. **Test Case**: Verify that the publish year field does not accept special characters.
   - **Input**: "2020!"
   - **Expected Result**: Error message displayed indicating the publish year must be a numeric value.

5. **Test Case**: Verify that the publish year field does not accept negative numbers.
   - **Input**: "-2020"
   - **Expected Result**: Error message displayed indicating the publish year must be a positive number.

6. **Test Case**: Verify that the publish year field does not accept future years (assuming the current year is 2024).
   - **Input**: "2025"
   - **Expected Result**: Error message displayed indicating the publish year cannot be in the future.

7. **Test Case**: Verify that the publish year field does not accept years before the invention of the printing press (e.g., before 1440).
   - **Input**: "1400"
   - **Expected Result**: Error message displayed indicating the publish year must be after 1440.

8. **Test Case**: Verify that the publish year field accepts a four-digit year.
   - **Input**: "1999"
   - **Expected Result**: Publish year accepted successfully.

9. **Test Case**: Verify that the publish year field does not accept a year with less than four digits.
   - **Input**: "999"
   - **Expected Result**: Error message displayed indicating the publish year must be a four-digit number.

10. **Test Case**: Verify that the publish year field does not accept a year with more than four digits.
    - **Input**: "10000"
    - **Expected Result**: Error message displayed indicating the publish year must be a four-digit number.

11. **Test Case**: Verify that the publish year field trims leading and trailing spaces.
    - **Input**: " 2020 "
    - **Expected Result**: Publish year accepted as "2020".

12. **Test Case**: Verify that the publish year field does not accept decimal numbers.
    - **Input**: "2020.5"
    - **Expected Result**: Error message displayed indicating the publish year must be an integer.

13. **Test Case**: Verify that the publish year field does not accept alphanumeric characters.
    - **Input**: "2020AD"
    - **Expected Result**: Error message displayed indicating the publish year must be a numeric value.

14. **Test Case**: Verify that the publish year field handles SQL injection attempts.
    - **Input**: "2020; DROP TABLE Books;"
    - **Expected Result**: Error message displayed indicating invalid input.

15. **Test Case**: Verify that the publish year field handles XSS attempts.
    - **Input**: "<script>alert('XSS')</script>"
    - **Expected Result**: Error message displayed indicating invalid input.

16. **Test Case**: Verify that the publish year field accepts the current year.
    - **Input**: "2024" (assuming the current year is 2024)
    - **Expected Result**: Publish year accepted successfully.

17. **Test Case**: Verify that the publish year field does not accept partial years.
    - **Input**: "20"
    - **Expected Result**: Error message displayed indicating the publish year must be a four-digit number.

18. **Test Case**: Verify that the publish year field logs the input action for auditing purposes.
    - **Input**: "1984"
    - **Expected Result**: Publish year accepted successfully and action logged.

19. **Test Case**: Verify that the publish year field handles excessively repetitive characters.
    - **Input**: "2222222222"
    - **Expected Result**: Error message displayed indicating the publish year must be a four-digit number.

20. **Test Case**: Verify that the publish year field handles edge cases around valid years.
    - **Input**: "1440" and "2024" (assuming 1440 is the earliest acceptable year and 2024 is the current year)
    - **Expected Result**: Publish year accepted successfully for both inputs.

### Upload a Photo When Adding a New Book

1. **Test Case**: Verify that the photo upload box accepts a valid image file (e.g., JPEG).
   - **Input**: "book_cover.jpg"
   - **Expected Result**: Image uploaded successfully.

2. **Test Case**: Verify that the photo upload box accepts a valid image file (e.g., PNG).
   - **Input**: "book_cover.png"
   - **Expected Result**: Image uploaded successfully.

3. **Test Case**: Verify that the photo upload box does not accept non-image files (e.g., PDF).
   - **Input**: "document.pdf"
   - **Expected Result**: Error message displayed indicating only image files are allowed.

4. **Test Case**: Verify that the photo upload box does not accept image files larger than the maximum size limit (e.g., 5MB).
   - **Input**: "large_image.jpg" (6MB)
   - **Expected Result**: Error message displayed indicating the file size exceeds the limit.

5. **Test Case**: Verify that the photo upload box accepts the maximum allowed image file size (e.g., 5MB).
   - **Input**: "max_size_image.jpg" (5MB)
   - **Expected Result**: Image uploaded successfully.

6. **Test Case**: Verify that the photo upload box does not accept files with unsupported formats (e.g., GIF).
   - **Input**: "animated.gif"
   - **Expected Result**: Error message displayed indicating unsupported file format.

7. **Test Case**: Verify that the photo upload box does not accept files with no extension.
   - **Input**: "no_extension"
   - **Expected Result**: Error message displayed indicating invalid file format.

8. **Test Case**: Verify that the photo upload box accepts an image with a valid extension but checks the actual file content.
   - **Input**: "book_cover.jpg" (renamed .exe file)
   - **Expected Result**: Error message displayed indicating invalid file format.

9. **Test Case**: Verify that the photo upload box does not accept corrupted image files.
   - **Input**: "corrupted_image.jpg"
   - **Expected Result**: Error message displayed indicating the file is corrupted.

10. **Test Case**: Verify that the photo upload box trims leading and trailing spaces from the file name.
    - **Input**: " book_cover.jpg "
    - **Expected Result**: Image uploaded successfully as "book_cover.jpg".

11. **Test Case**: Verify that the photo upload box does not accept multiple files at once.
    - **Input**: "book_cover1.jpg, book_cover2.jpg"
    - **Expected Result**: Error message displayed indicating only one file can be uploaded at a time.

12. **Test Case**: Verify that the photo upload box does not accept zero-byte image files.
    - **Input**: "zero_byte_image.jpg"
    - **Expected Result**: Error message displayed indicating the file is empty.

13. **Test Case**: Verify that the photo upload box accepts images with transparent backgrounds.
    - **Input**: "transparent_background.png"
    - **Expected Result**: Image uploaded successfully.

14. **Test Case**: Verify that the photo upload box logs the upload action for auditing purposes.
    - **Input**: "book_cover.jpg"
    - **Expected Result**: Image uploaded successfully and action logged.

15. **Test Case**: Verify that the photo upload box handles drag-and-drop file uploads.
    - **Input**: Drag-and-drop "book_cover.jpg"
    - **Expected Result**: Image uploaded successfully.

16. **Test Case**: Verify that the photo upload box handles file name length limits.
    - **Input**: "a" * 260 + ".jpg" (filename exceeds 255 characters)
    - **Expected Result**: Error message displayed indicating the file name is too long.

17. **Test Case**: Verify that the photo upload box does not accept executable files disguised as images.
    - **Input**: "malicious_image.jpg.exe"
    - **Expected Result**: Error message displayed indicating invalid file format.

18. **Test Case**: Verify that the photo upload box displays a preview of the uploaded image.
    - **Input**: "book_cover.jpg"
    - **Expected Result**: Image uploaded successfully and preview displayed.

19. **Test Case**: Verify that the photo upload box handles upload cancellation properly.
    - **Input**: "book_cover.jpg" (cancel upload midway)
    - **Expected Result**: Upload canceled and no file uploaded.

20. **Test Case**: Verify that the photo upload box provides a clear error message for unsupported image dimensions (if any restrictions).
    - **Input**: "huge_dimensions_image.jpg" (e.g., 10000x10000 pixels)
    - **Expected Result**: Error message displayed indicating the image dimensions are not supported.

## Dashboard Testing

### Display Admin Welcome Screen

1. **Test Case**: Verify that the dashboard displays the welcome screen for admin
   - **Steps**: Log in as admin -> Navigate to the Dashboard page
   - **Expected Result**: The dashboard should display the welcome admin page.

### Access Control

1. **Test Case**: Verify that non-admin users cannot access the dashboard
   - **Steps**: Log in as a non-admin user -> Attempt to navigate to the Dashboard page
   - **Expected Result**: The non-admin user should be redirected or shown an access denied message.

2. **Test Case**: Non-admin user redirected to home page
   - **Steps**: Log in as a non-admin user -> Attempt to navigate to the Dashboard page
   - **Expected Result**: The non-admin user should be redirected to the home page.

3. **Test Case**: Non-admin user sees access denied message
   - **Steps**: Log in as a non-admin user -> Attempt to navigate to the Dashboard page
   - **Expected Result**: The non-admin user should see an access denied message.

4. **Test Case**: Verify access control for different user roles
   - **Steps**: Log in as a non-admin user with different roles (e.g., customer, guest) -> Attempt to navigate to the Dashboard page
   - **Expected Result**: All non-admin users should be either redirected or shown an access denied message.

5. **Test Case**: Non-admin user access via direct URL input
   - **Steps**: Log in as a non-admin user -> Directly input the Dashboard URL in the browser address bar
   - **Expected Result**: The non-admin user should be redirected or shown an access denied message.

## Product Testing

### Add New Products

1. **Test Case**: Verify that the admin can add a new product
   - **Steps**: Log in as admin -> Navigate to the Product page -> Click on 'Add New Product' -> Fill in the product details -> Click 'Save’
   - **Expected Result**: The new product should be added and visible in the product list.

2. **Test Case**: Verify adding a product with all required fields
   - **Steps**: Log in as admin -> Navigate to the Product page -> Click on 'Add New Product' -> Fill in all required fields (name, description, price, category, stock) -> Click 'Save’
   - **Expected Result**: The new product should be added and visible in the product list with all provided details correctly displayed.

3. **Test Case**: Verify adding a product with optional fields
   - **Steps**: Log in as admin -> Navigate to the Product page -> Click on 'Add New Product' -> Fill in all required fields and some optional fields (e.g., product images, tags) -> Click 'Save’
   - **Expected Result**: The new product should be added and visible in the product list with both required and optional details correctly displayed.

4. **Test Case**: Verify adding a product without filling optional fields
   - **Steps**: Log in as admin -> Navigate to the Product page -> Click on 'Add New Product' -> Fill in only the required fields -> Click 'Save’
   - **Expected Result**: The new product should be added and visible in the product list with only the required details displayed.

5. **Test Case**: Verify error message when required fields are missing
   - **Steps**: Log in as admin -> Navigate to the Product page -> Click on 'Add New Product' -> Fill in some details but leave one or more required fields empty -> Click 'Save’
   - **Expected Result**: An error message should be displayed indicating which required fields are missing, and the product should not be saved.

6. **Test Case**: Verify adding a product with invalid data
   - **Steps**: Log in as admin -> Navigate to the Product page -> Click on 'Add New Product' -> Enter invalid data in one or more fields (e.g., negative price, invalid date) -> Click 'Save’
   - **Expected Result**: An error message should be displayed indicating the invalid data, and the product should not be saved.

7. **Test Case**: Verify the product is listed after addition
   - **Steps**: Log in as admin -> Navigate to the Product page -> Click on 'Add New Product' -> Fill in the product details -> Click 'Save’ -> Go to the product list
   - **Expected Result**: The newly added product should be visible in the product list with correct details.

8. **Test Case**: Verify product details accuracy after addition
   - **Steps**: Log in as admin -> Navigate to the Product page -> Click on 'Add New Product' -> Fill in the product details -> Click 'Save’ -> View the product details from the product list
   - **Expected Result**: The product details should match the input data provided during addition.

## Order Testing

### Verify Display of All Orders

1. **Test Case**: Verify display of all orders
   - **Steps**: Log in as admin -> Navigate to the Order Page
   - **Expected Result**: All orders should be displayed in a list with their details.

### Verify Filtering Orders by Status

1. **Test Case**: Verify filtering orders by status
   - **Steps**: Log in as admin -> Navigate to the Order Page -> Use the status filter to filter orders (e.g., pending, completed)
   - **Expected Result**: Only orders matching the selected status should be displayed.

### Verify Sorting Orders by Date

1. **Test Case**: Verify sorting orders by date
   - **Steps**: Log in as admin -> Navigate to the Order Page -> Sort orders by date (ascending/descending)
   - **Expected Result**: Orders should be displayed in the correct date order.

### Verify Search Functionality for Orders

1. **Test Case**: Verify search functionality for orders
   - **Steps**: Log in as admin -> Navigate to the Order Page -> Use the search bar to search for a specific order by order ID or customer name
   - **Expected Result**: The order matching the search criteria should be displayed.

### Order Detail: Verify that the Admin Can View Detailed Information

1. **Test Case**: Verify viewing detailed information of an order
   - **Steps**: Log in as admin -> Navigate to the Order Page -> Click on a specific order
   - **Expected Result**: Detailed information of the selected order should be displayed.

2. **Test Case**: Verify order detail page layout
   - **Steps**: Log in as admin -> Navigate to the Order Page -> Click on a specific order
   - **Expected Result**: The order detail page should have a clear layout displaying all relevant information (e.g., order items, customer details, shipping address).

3. **Test Case**: Verify viewing order items
   - **Steps**: Log in as admin -> Navigate to the Order Page -> Click on a specific order
   - **Expected Result**: All items in the order should be listed with details such as quantity, price, and product name.

4. **Test Case**: Verify viewing customer information
   - **Steps**: Log in as admin -> Navigate to the Order Page -> Click on a specific order
   - **Expected Result**: Customer information should be displayed, including name, email, and contact number.

5. **Test Case**: Verify order detail page performance
   - **Steps**: Log in as admin -> Navigate to the Order Page -> Click on a specific order
   - **Expected Result**: The order detail page should load quickly without performance issues, even for orders with many items.

6. **Test Case**: Verify if the email button allows admin to send email back to user
   - **Steps**: Log in as admin -> Navigate to the Order Page -> Click on email button -> Type some words for user -> click on send button
   - **Expected Result**: The user should be able to receive the email from admin.

## General Test Cases

### Login Functionality

1. **Test Case**: Verify that users can log in with valid credentials
   - **Steps**: Navigate to the login page -> Enter valid admin credentials -> Click login with gmail
   - **Expected Result**: The user should be logged in and redirected to the dashboard.

### Log out Functionality

1. **Test Case**: Verify that users can log out successfully
   - **Steps**: Log in as admin -> Click on the log out button
   - **Expected Result**: The user should be logged out and redirected to the login page.
