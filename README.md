# Rise-11-Assignment

Dashboard for Filing a Claim
This project involves building a React-based dashboard for a user-friendly claim filing interface. The dashboard allows users to provide details about their claims, upload required documents, and track the progress through a multi-step process.

Approach to Building the Dashboard
Component-Based Architecture:
The dashboard was divided into reusable components:

Sidebar: For navigation and branding.
Main Content Area: For displaying the form fields, progress bar, and file upload sections.
Dynamic Elements: Like the calculation of claim value percentage.
Responsive Design:
CSS was structured to ensure that the layout adapts to different screen sizes while maintaining alignment, spacing, and readability.

State Management:

Used React's useState hook for managing input data, toggles, and dynamic updates like the percentage calculation.
Form data was structured into an object for easy management and extensibility.
Dynamic Validation and Calculation:
The percentage of the claim value relative to the contract value was calculated in real-time and displayed, providing users immediate feedback.

CSS Styling:

Leveraged custom styles for components like the progress bar, form fields, toggle buttons, and file upload areas.
Ensured alignment of widgets to match the provided design.
Challenges Faced and How They Were Resolved
Progress Bar Styling:

Challenge: The provided progress bar required custom styling for active and completed states.
Solution: Used completed and active classes with distinct colors to indicate progress visually.
Aligning Widgets:

Challenge: Aligning widgets (form inputs and file upload boxes) as shown in the image while maintaining responsiveness.
Solution: Used a CSS grid system with appropriate gap and alignment styles.
Percentage Calculation:

Challenge: Dynamically calculating and updating the percentage while ensuring valid inputs (non-zero values).
Solution: Added validation to ensure inputs were greater than zero and recalculated the percentage on every relevant input change.
Dynamic Toggle Buttons:

Challenge: Styling toggle buttons to indicate active and inactive states.
Solution: Added conditional classes based on the state, making it intuitive for users.
File Upload Styling:

Challenge: Customizing file upload inputs to match the design.
Solution: Wrapped file inputs in styled containers and used modern input selectors.
Assumptions Made
Design Requirements:

Assumed the layout provided in the image was the desired final design. Adjustments were made to closely replicate it while maintaining responsiveness.
Form Validation:

Only basic validation (non-empty, numeric values for contract and claim) was included for this implementation. Advanced validations (like file type restrictions) were assumed to be out of scope.
Percentage Display:

Assumed that the percentage should be dynamically calculated as users input data, rounded to two decimal places, and displayed in a simple format.
Multi-Step Process:

The progress bar assumed a static representation for now, with dynamic functionality to reflect actual step completion being considered as part of future improvements.
Placeholder Sidebar Items:

Assumed the sidebar items ("Dashboard," "My Cases," etc.) were placeholders and could be replaced with actual links as the project develops.
Future Enhancements
Form Validation:

Implement advanced validations, such as ensuring uploaded files are of specific formats and required fields are completed.
Dynamic Progress Bar:

Make the progress bar fully functional, updating dynamically as the user completes each step.
Backend Integration:

Add API calls for submitting form data and uploading files, with error handling and success notifications.
Accessibility:

Ensure the application is fully accessible (ARIA roles, keyboard navigation, etc.).
Getting Started
Clone the repository:

bash
Copy code
git clone <repository-url>
cd claim-dashboard
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Access the app at http://localhost:3000 in your browser.

Technologies Used
React: For building the UI components.
CSS: For styling and layout.
JavaScript: For dynamic interactions.