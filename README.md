# DIYARAH Landing Page

Welcome to the comprehensive Developer Documentation for our Landing Page Components. Here, you'll find an extensive overview of all the functions encompassed within our components, coupled with a detailed exploration of the file structure, styling intricacies, SEO strategies, and deployment methodologies. This resource serves as your ultimate guide to understanding the inner workings of our landing page components, empowering you to maximize their potential and streamline your development process.

![DIYARAH Logo](https://raw.githubusercontent.com/ibrahim99035/Diyarah/main/public/Images/Icons/logoWithSlogan.png)

### [Application Deployment Link](https://voluble-bublanina-db5156.netlify.app/)

## Dependencies:

```json
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.5.1",
    "@fortawesome/free-solid-svg-icons": "^6.5.1",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-intersection-observer": "^9.5.3",
    "react-router-dom": "^6.21.1",
    "react-slick": "^0.29.0",
    "react-spring": "^9.7.3",
    "slick-carousel": "^1.8.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "vite": "^5.0.8"
  }
}
```

##### The project relies on the following dependencies:
- **@fortawesome/fontawesome-svg-core** (^6.5.1): A library for scalable vector icons.
- **@fortawesome/free-solid-svg-icons** (^6.5.1): Provides a collection of free solid icons.
- **@fortawesome/react-fontawesome** (^0.2.0): Allows easy use of Font Awesome icons in React applications.
- **react** (^18.2.0): A JavaScript library for building user interfaces.
- **react-dom** (^18.2.0): Provides DOM-specific methods that can be used at the top level of your React application.
- **react-intersection-observer** (^9.5.3): A React wrapper for the Intersection Observer API.
- **react-router-dom** (^6.21.1): Provides DOM bindings for React Router, enabling routing in web applications.
- **react-slick** (^0.29.0): A carousel component built with React.
- **react-spring** (^9.7.3): A spring-physics based animation library for React applications.
- **slick-carousel** (^1.8.1): A responsive carousel jQuery plugin.

---

## Application Routes:

```jsx
const App = () => {
  return (
    <div>  
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element= {
              <>
                <Header />
                <SliderSection />
                <AboutUsSection />
                <CardComponent />
                <ChatWithUsSection />
                <Footer />
                <GoToTopButton />
              </>
          } />

          <Route path='/projects' element= {
            <>
              <Header />
              <InfoComponent />
              <Footer />
              <GoToTopButton />
            </>
          } />

          <Route path='/news' element= {
            <>
              <Header />
              <Footer />
              <GoToTopButton />
            </>
          } />
          <Route path='/about-us' element= {
            <>
              <Header />
              <About />
              <Footer />
              <GoToTopButton />
            </>
          } />

          <Route path='/terms-and-conditions' element= {
            <>
              <Header />
              <TermsAndConditions />
              <Footer />
              <GoToTopButton />
            </>
          } />

          <Route path='/intellectual-property' element= {
            <>
              <Header />
              <IntellectualPropertyRights />
              <Footer />
              <GoToTopButton />
            </>
          } />

          <Route path='/privacy-policy' element= {
            <>
              <Header />
              <PrivacyPolicy />
              <Footer />
              <GoToTopButton />
            </>
          } />

          <Route path='/location' element= {
            <>
              <Header />
              <GoogleMapSection />
              <Footer />
              <GoToTopButton />
            </>
          } />

          <Route path='/chatting' element= {
            <>
              <Header />
              <ChatWithUsSection />
              <Footer />
              <GoToTopButton />
            </>
          } />
          <Route path='*' element = {<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}  

export default App;
```

1. **Root Route ('/')**:
    - Route Path: '/'
    - Components:
        - `<Header />`: Header component
        - `<SliderSection />`: Slider section component
        - `<AboutUsSection />`: About us section component
        - `<CardComponent />`: Card component
        - `<ChatWithUsSection />`: Chat with us section component
        - `<Footer />`: Footer component
        - `<GoToTopButton />`: Go to top button component

1. **Projects Route ('/projects')**:
    - Route Path: '/projects'
    - Components:
        - `<Header />`: Header component
        - `<InfoComponent />`: Info component
        - `<Footer />`: Footer component
        - `<GoToTopButton />`: Go to top button component

2. **About Us Route ('/about-us')**:
    - Route Path: '/about-us'
    - Components:
        - `<Header />`: Header component
        - `<About />`: About component
        - `<Footer />`: Footer component
        - `<GoToTopButton />`: Go to top button component

1. **Terms and Conditions Route ('/terms-and-conditions')**:
    - Route Path: '/terms-and-conditions'
    - Components:
        - `<Header />`: Header component
        - `<TermsAndConditions />`: Terms and conditions component
        - `<Footer />`: Footer component
        - `<GoToTopButton />`: Go to top button component

1. **Intellectual Property Route ('/intellectual-property')**:
    - Route Path: '/intellectual-property'
    - Components:
        - `<Header />`: Header component
        - `<IntellectualPropertyRights />`: Intellectual property rights component
        - `<Footer />`: Footer component
        - `<GoToTopButton />`: Go to top button component

1. **Privacy Policy Route ('/privacy-policy')**:
    - Route Path: '/privacy-policy'
    - Components:
        - `<Header />`: Header component
        - `<PrivacyPolicy />`: Privacy policy component
        - `<Footer />`: Footer component
        - `<GoToTopButton />`: Go to top button component

1. **Location Route ('/location')**:
    - Route Path: '/location'
    - Components:
        - `<Header />`: Header component
        - `<GoogleMapSection />`: Google map section component
        - `<Footer />`: Footer component
        - `<GoToTopButton />`: Go to top button component

1. **Chatting Route ('/chatting')**:
    - Route Path: '/chatting'
    - Components:
        - `<Header />`: Header component
        - `<ChatWithUsSection />`: Chat with us section component
        - `<Footer />`: Footer component
        - `<GoToTopButton />`: Go to top button component

1. **Fallback Route ('*')**:
    - Route Path: '*'
    - Components:
        - `<NotFound />`: Not found component (used for handling unknown routes)

Each route defines a set of components to render when that route is matched. React Router's `BrowserRouter`, `Routes`, and `Route` components are used for managing routing within the application.

---

## React Components:
### Component 1: Header Section

```jsx
import React, { useState } from 'react';

import './Styles/Header.css';
import './Styles/VideoSection.css';
import DiyarahLogo from '/Images/Icons/logoWithSlogan.png'
import BackVideo from '/Videos/BackVideo.mp4'

const Header = () => {
  // Step 2: Add state to track whether the navigation list is active or not
  const [navListActive, setNavListActive] = useState(false);

  return (

    <header className="header">
      <nav className={`navbar ${navListActive ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">الصفحة الرئيسية</a></li>
          <li className="nav-item"><a href="/projects" className="nav-link">المشاريع</a></li>
          <li className="nav-item"><a href="/about-us" className="nav-link">من نحن</a></li>
          <li className="nav-item"><a href="/location" className="nav-link">موقعنا</a></li>
          <li className="nav-item" id='contactsNav'><a href="/chatting" className="nav-link">تواصل معنا</a></li>
        </ul>

        <div id='vlogoDiv'>
          <img src={DiyarahLogo} alt="Company Logo" className="vidLogo" loading="lazy" />
        </div>
      </nav>

      <div className="video-section">
      <video autoPlay loop playsInline>
        <source src={ BackVideo } type="video/mp4" />
        متصفحك لا يدعم تنسيق الفيديو المضاف الى الخلفية
      </video>
      <div className="content">
        <div>
         <h1>شركة ديارة العقارية</h1>
         <p>نبني المستقبل.</p>
        </div>
      </div>
    </div>
    </header>
  );
}
export default Header;
```

This component represents the header section of the landing page. It includes a navigation bar with links to different sections of the website and a background video with the company logo.

- **useState:** The `useState` hook is used to manage the state of the navigation list, determining whether it's active or not.
- **JSX Structure:**
    - The header contains a navigation bar (`<nav>`) with a list of links (`<ul>`).
    - The company logo is displayed inside a `<div>` element.
    - The background video is included within a `<div>` with the class name `video-section`.
    - The company name and slogan are displayed over the video.
- **Props:**
    - None
- **CSS Styles:**
    - The component relies on external CSS files (`Header.css` and `VideoSection.css`) for styling.

##### Here's a breakdown of the code:

1. Import necessary modules and styles:
    
    - `React`: The core React library.
    - `useState`: A hook for adding state to functional components.
    - Stylesheets for the header (`Header.css`) and the video section (`VideoSection.css`).
    - Import image assets: `DiyarahLogo` representing the logo of the company, and `BackVideo` representing a background video.
2. Define the `Header` component:
    
    - Initialize a state variable `navListActive` using the `useState` hook. This state variable is used to track whether the navigation list is active or not.
3. Render the component:
    
    - Render a `<header>` element with the class `header`.
    - Inside the header, render a `<nav>` element with the class `navbar`. The class is conditionally set to `active` based on the value of `navListActive`. This allows toggling of the navigation menu.
    - Within the `<nav>` element, render an unordered list `<ul>` with the class `nav-list`, containing list items `<li>` representing navigation links `<a>`.
    - Render the company logo `<img>` inside a `<div>` with the id `vlogoDiv`, with the source set to `DiyarahLogo`.
    - Render the video section `<div>` with the class `video-section`. Inside this div, render a `<video>` element with autoplay and loop attributes, and a source (`<source>`) pointing to `BackVideo`. If the browser does not support video formats, a fallback message is displayed.
    - Inside the video section, render a `<div>` with the class `content` containing a heading `<h1>` and a paragraph `<p>`.
4. Export the `Header` component as the default export.
### Component 2: Slider Section

```jsx
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Styles/SliderSection.css';

import Building1 from '/Images/Buildingds/Building1.webp'
import Building2 from '/Images/Buildingds/Building2.webp'
import Building3 from '/Images/Buildingds/Building3.webp'
import Building4 from '/Images/Buildingds/Building4.webp'
import Building5 from '/Images/Buildingds/Building5.webp'
import Building6 from '/Images/Buildingds/Building6.webp'
import Building7 from '/Images/Buildingds/Building7.webp'
import Building8 from '/Images/Buildingds/Building8.webp'
import Building9 from '/Images/Buildingds/Building9.webp'

const SliderSection = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="background-slide">
        <div>
            <Slider ref={sliderRef} {...settings}>
                <div className="slide">
                    <img src={Building1} alt="Slide 1" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building2} alt="Slide 2" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building3} alt="Slide 3" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building4} alt="Slide 4" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building5} alt="Slide 5" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building6} alt="Slide 6" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building7} alt="Slide 7" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building8} alt="Slide 8" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building9} alt="Slide 9" className="slide-image" loading="lazy" />
                </div>
            </Slider>
        </div>

        <div className="navigation-buttons">
            <button onClick={goToPrevSlide}> &lt; السابق</button>
            <button onClick={goToNextSlide}>التالي &gt;</button>
        </div>
    </div>
  );
}
export default SliderSection;
```

This component represents a slider section displaying images of different buildings.

- **useRef:** The `useRef` hook is used to create a reference to the slider component for navigation control.
- **JSX Structure:**
    - The slider is implemented using the `react-slick` library.
    - Images of buildings are displayed within the slider.
    - Navigation buttons (`<button>`) allow users to navigate through the slides.
- **Props:**
    - None
- **CSS Styles:**
    - The component relies on an external CSS file (`SliderSection.css`) for styling.

##### Here's a breakdown of the code:
1. Import necessary modules and styles:
    
    - `React`: The core React library.
    - `useRef`: A hook for creating a reference to a DOM element.
    - `Slider` from `react-slick`: The slider component provided by the `react-slick` library.
    - Stylesheets for the slider from the `slick-carousel` library.
    - Custom styles from the `SliderSection.css` file.
2. Import image assets:
    
    - Import images of buildings (Building1 to Building9) from their respective file paths.
3. Define the `SliderSection` component:
    
    - Initialize a reference (`sliderRef`) using the `useRef` hook to access the slider component.
    - Define settings for the slider, including options such as autoplay, speed, and navigation.
    - Define functions (`goToNextSlide` and `goToPrevSlide`) to navigate to the next and previous slides using the `slickNext` and `slickPrev` methods on the slider reference.
4. Render the component:
    
    - Render a `<div>` element with the class `background-slide`.
    - Inside this `<div>`, render the `Slider` component with the provided settings and a reference (`ref={sliderRef}`).
    - Within the `Slider` component, render individual slides (`<div className="slide">`) containing images of buildings. Each image is wrapped in an `<img>` tag with a `src` attribute pointing to the imported image and an `alt` attribute for accessibility.
    - Render navigation buttons (`<button>`) for moving to the previous and next slides. These buttons call the `goToPrevSlide` and `goToNextSlide` functions respectively when clicked.
5. Export the `SliderSection` component as the default export.
### Component 3: Short-About Hero Section

```jsx
import React from 'react';
import './Styles/HeroSection.css';
import HeroSectionBuildings from '/Images/Buildingds/heroSectionBuildingsPixeled.png'

const HeroSection = () => {
  return (
    <div className="about-us-section">
      <div className="custom-header">
        <h2>رحلتنا و قيمنا</h2>
        <p className="sub-header">
          شركة ديارة العقارية تقدم لكم تجربة استثنائية في عالم العقارات، حيث يتميز عملنا بالاحترافية واحترام الخصوصية.
        </p>
      </div>
      <div id='heroImageDiv'>
        <img
            src= {HeroSectionBuildings}
            alt="Buidings Grafity"
            className="hero-image"
            id='HeroBuilding'
            loading="lazy"
        />
      </div>
      <br />
      <div className="Hprofessional-intro-section">
        <p>
          نحن نفتخر بتقديم خدمات عقارية شاملة تشمل البيع والشراء وإدارة العقارات، مع التفرد في التعامل مع كل عميل وتركيزنا على تلبية احتياجاتهم الفريدة.
        </p>
        <p>
          نلتزم بحماية خصوصية عملائنا وضمان أمان معلوماتهم، ونستخدم تقنيات متقدمة ونتبنى الابتكار لضمان تجربة متميزة وفعّالة لعملائنا.

        </p>
        <p>
          بتفهم عميق لسوق العقارات واستخدام التكنولوجيا، نسعى دائمًا لتحقيق أعلى قيمة لعملائنا، وندعوكم لاكتشاف الفارق مع ديارة العقارية حيث نساهم في بناء مستقبلكم بكفاءة واستدامة.
        </p>
      </div>
      <div id='SeeMoreDiv'>
        <a href="/about-us" target='_blank' id='SeeMore'>اطلع على المزيد ...</a>
      </div>
    </div>
  );
};
export default HeroSection;
```

This component provides a brief introduction to the company and its values.

- **JSX Structure:**
    - Displays a custom header (`<h2>`) and a sub-header (`<p>`).
    - An image representing buildings is displayed.
    - Descriptive text about the company's services and values is provided.
    - A link is provided to navigate to the full About Us section.
- **Props:**
    - None
- **CSS Styles:**
    - The component relies on an external CSS file (`HeroSection.css`) for styling.

##### Here's a breakdown of the code:
1. Import necessary modules and styles:
    
    - `React`: The core React library.
    - Stylesheet for the hero section (`HeroSection.css`).
    - Import an image asset: `HeroSectionBuildings` representing buildings for the hero section.
2. Define the `HeroSection` component:
    
    - Return JSX representing the hero section of the webpage.
    - The hero section consists of a `<div>` element with the class `about-us-section`.
    - Inside this `<div>`, there is a `<div>` with the class `custom-header`, containing a heading `<h2>` and a paragraph `<p>` serving as a sub-header.
    - Following this, there's another `<div>` with the id `heroImageDiv`, containing an `<img>` element displaying the image of buildings (`HeroSectionBuildings`).
    - Then, there's a `<div>` with the class `Hprofessional-intro-section`, containing multiple paragraphs serving as an introduction to the company's services and values.
    - Finally, there's a `<div>` with the id `SeeMoreDiv`, containing a link `<a>` to redirect users to the about-us page for more information.
3. Export the `HeroSection` component as the default export.
### Component 4: Cards Component

```jsx
// CardComponent.jsx
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './Styles/CardComponent.css'
  
import image1 from '/Images/Buildingds/NargesBuildings.webp'
import image2 from '/Images/Buildingds/Damaam.webp'
import image3 from '/Images/Buildingds/Safa.webp'

const CardComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust rootMargin as needed for your design
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
  });

  return (
    <animated.div ref={ref} style={animationProps} className="cardComponent">
      <h2>اخر المشاريع لدينا</h2>
      <div className="animatedCardComponent">
        <CardItem
          imgSrc={image1}  
          title="The Loft"
          description="مجمع سكني مبني بتقنيات حديثة في حي النرجس بالرياض، يتميز بالموقع الاستراتيجي بالقرب من المطار وجامعة الأميرة نورة والمولات التجارية. توفر الشقق أنظمة ذكية للراحة والأمان."
          partID = "projectPartId1"
        />
        <CardItem
          imgSrc={image2}
          title="Gulf Square"
          description="عمارة تجارية في حي الغدير بالدمام، تتكون من طوابق مخصصة للمعارض التجارية والمكاتب والشركات، بموقع استراتيجي على طريق الخليج الساحلي بمساحة 3600م. تهدف لتوفير بيئة عمل مثالية للشركات والعملاء."
          partID = "projectPartId2"
        />
        <CardItem
          imgSrc={image3}
          title="Safa Villas"
          description="مشروع فلل سكنية في حي الصفا بالأحساء، يضم 6 فلل بتصاميم داخلية مذهلة ومساحات شاسعة، بمساحة إجمالية 529م للمشروع و315م لكل فيلا. يوفر حلول سكنية اقتصادية مع خيارات متعددة للعائلات."
          partID = "projectPartId3"
        />
      </div>
    </animated.div>
  );
};

const CardItem = ({ imgSrc, title, description, partID }) => {
  return (
    <div className="cardDiv">
      <img src={imgSrc} alt={`Card Image for ${title}`} loading="lazy" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardComponent;
```

This component displays cards showcasing the latest projects.

- **useInView and useSpring:** These hooks are used for animation effects when the cards come into view.
- **JSX Structure:**
    - Each card (`<div>` with class `cardDiv`) displays an image, title, and description.
- **Props:**
    - `imgSrc`: Source of the image.
    - `title`: Title of the project.
    - `description`: Description of the project.
- **CSS Styles:**
    - The component relies on an external CSS file (`CardComponent.css`) for styling.

##### Here's a breakdown of the code:
1. Import necessary modules and styles:
    
    - `React`: The core React library.
    - `useSpring` and `animated` from `react-spring`: Used for animating components.
    - `useInView` from `react-intersection-observer`: Used for detecting when the component is in the viewport.
    - Stylesheet for the card component (`CardComponent.css`).
    - Import image assets (`image1`, `image2`, `image3`) representing project images.
2. Define the `CardComponent` component:
    
    - Uses the `useInView` hook to detect when the component enters the viewport.
    - Uses the `useSpring` hook to animate the component's appearance based on whether it's in the viewport or not.
    - Returns an animated `<div>` element containing a header `<h2>` and multiple `CardItem` components representing individual project cards.
3. Define the `CardItem` component:
    
    - Accepts props for `imgSrc`, `title`, `description`, and `partID`.
    - Returns a `<div>` element representing a single project card with an image, title (`<h3>`), and description (`<p>`).
4. Export the `CardComponent` component as the default export.
    

This component creates a card-based layout to showcase information about different projects. Each card contains an image, a title, and a description. The `CardComponent` handles animation and intersection observer logic, while `CardItem` is responsible for rendering individual project cards.
### Component 5: Chat With Us Component

```jsx
import React from 'react';
import whatsappicon from '/Images/Social/whatsapp.png'
import './Styles/ChatWithUsSection.css'; // Import your CSS file

const ChatWithUsSection = () => {
  return (
    <section className="chat-section" id="chatting">
      <h2>تواصل معنا على واتساب</h2>
      <img src={whatsappicon} alt="Whatsapp Icon" loading="lazy" /> <br /> <br />
      <a href="https://api.whatsapp.com/send?phone=966572696382" className="whatsapp-button" target="_blank">Chat on WhatsApp</a>
    </section>
  );
}

export default ChatWithUsSection;
```

This component allows users to initiate a conversation with the company via WhatsApp.

- **JSX Structure:**
    - Contains a section (`<section>`) with the class name `chat-section`.
    - Displays a heading (`<h2>`) indicating the purpose of the section.
    - Shows a WhatsApp icon (`<img>`) and provides a link to initiate a chat on WhatsApp.
- **Props:**
    - None
- **CSS Styles:**
    - The component relies on an external CSS file (`ChatWithUsSection.css`) for styling.

##### Here's a breakdown of the code:
1. Import necessary modules and styles:
    
    - `React`: The core React library.
    - Import an image asset: `whatsappicon` representing the WhatsApp icon.
    - Stylesheet for the chat section (`ChatWithUsSection.css`).
2. Define the `ChatWithUsSection` component:
    
    - Returns JSX representing the chat section.
    - The section contains a heading `<h2>` indicating "تواصل معنا على واتساب" (which translates to "Chat with us on WhatsApp").
    - Renders the WhatsApp icon using an `<img>` tag with the `src` attribute set to `whatsappicon`.
    - Provides a link `<a>` with the text "Chat on WhatsApp" that directs users to the WhatsApp chat page when clicked. The `href` attribute is set to `"https://api.whatsapp.com/send?phone=966572696382"`, which opens a WhatsApp chat with the specified phone number. The `target` attribute is set to `"_blank"` to open the link in a new tab.
3. Export the `ChatWithUsSection` component as the default export.
    

This component creates a section on the webpage where users can initiate a WhatsApp chat with the company. It displays the WhatsApp icon and provides a link to start the chat.
### Component 6: Go Up Component

```jsx
import React, { useState, useEffect } from 'react';
import './Styles/up.css'; // Import your CSS file for styling

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show/hide the button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);  

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`goToTopBtn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      الى أعلى
    </button>
  );
};

export default GoToTopButton;
```

This component represents a button that allows users to scroll to the top of the page.

- **useState and useEffect:** These hooks are used to manage the visibility of the button based on the user's scroll position.
- **JSX Structure:**
    - Renders a button (`<button>`) with the text "الى أعلى".
- **Props:**
    - None
- **CSS Styles:**
    - The component relies on an external CSS file (`up.css`) for styling.

##### Here's a breakdown of the code:
1. Import necessary modules and styles:
    
    - `React`: The core React library.
    - Stylesheet for the button (`up.css`).
2. Define the `GoToTopButton` component:
    
    - Uses the `useState` hook to manage the state of whether the button should be visible or not. Initially, it's set to `false`.
    - Uses the `useEffect` hook with an empty dependency array to run the effect only once after the component mounts. This effect adds an event listener to the `scroll` event on the window and calls `handleScroll` function.
    - Inside the `handleScroll` function, it checks the vertical scroll position (`window.scrollY`) and updates the visibility state (`isVisible`) accordingly.
    - Returns a button element that scrolls to the top of the page when clicked. The button is conditionally styled based on the visibility state (`isVisible`).
    - The `scrollToTop` function scrolls the window to the top using `window.scrollTo` with smooth behavior.
3. Export the `GoToTopButton` component as the default export.
### Component 7: Projects Info Component

```jsx
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './Styles/InfoComponent.css';

import image1 from '/Images/Buildingds/NargesBuildings.webp'
import image2 from '/Images/Buildingds/Damaam.webp'
import image3 from '/Images/Buildingds/Safa.webp'

const InfoComponent = () => {
  return (
    <div>
      <InfoPart
        title="The Loft"
        description= {`
          يقدم "THE LOFT” مفهوم مميز للحياة العصرية، وهو عبارة عن مجمع شقق سكنية مبني وفق أحدث تقنيات البناء. بنماذج متعددة من الوحدات السكنية التي تلبي رغبات عملائنا. يتميز المشروع بموقعه  الأستراتيجي المميز في حي النرجس شمال الرياض، حيث يقع على طريق الملك سلمان بالقرب من أهم المناطق الحيوية كالمطار الملك خالد الدولي و جامعة الأميرة نورة بنت عبدالرحمن و المولات التجارية كالأفنيوز. يتكون المشروع من 4 مباني بمجموع 27 وحدة سكنية مقسمة الى 8 دبلكسات و 20 شقة، بمساحات تترواح بين 104م - 198م. يقدم “THE LOFT” لعملائنا سبل الراحة و الأمان حيث تمتلك وحداتنا أنظمة الشقق الذكية التي تناسب احتياجاتك وتوفر لك الخصوصية والاستقرار الذي تبحث عنه.
        `}
        imgSrc={ image1 }
        partId = 'projectPartId1'
        fromLeft
      />
      <InfoPart
        title="Gulf Square"
        description={`
          يقدم "GULF SQUARE” مكاناً مثالياً لإقامة الأعمال التجارية. حيث تُعد العمارة التجارية من الأماكن الحيوية للتبادل التجاري وعرض المنتجات والخدمات المختلفة، وتُعد أيضاً بأنها بيئة مثالية للشركات والعلامات التجارية لعرض منتجاتها وتعزيزها واستهداف عملائها المحتملين. حيث يقع “GULF SQUARE” بموقع استراتيجي مميز على طريق الخليج الساحلي في حي الغدير بمدينة الدمام بمساحة 3600م، ويتميز ايضاً بموقعه التجاري على الربط بين أحياء مدينة الدمام مما يجعل الوصول إليه في غاية السهولة. تتكون العمارة من عدة طوابق، حيث أن الدور السفلي مصمم للمعارض التجارية بمساحة 1200م، بينما الأدوار العلوية مخصصة للمكاتب والشركات بمساحة 2400م. تهدف “GULF SQUARE” الى انشاء بيئة عمل مثالية للمؤسسات التجارية وتسهيل التفاعل بين الشركات والعملاء.
        `}
        imgSrc={ image2 }
        partId = 'projectPartId2'
        fromRight
      />
      <InfoPart
        title="Safa Villas"
        description={`
          تقدم “SAFA VILLAS” تجربة عصرية فريدة للعيش والاستمتاع بالرفاهية. تضمن فللنا المصممة بشكل مبتكر وأنيق وجود مساحات شاسعة ذات تصاميم داخلية مذهلة التي توفر لكم الخصوصية والراحة التي تستحقونها. حيث يقع “SAFA VILLAS” في حي الصفا بمدينة الأحساء، ويتكون المشروع من 6 فلل سكنية بمساحة إجمالية 529م ومساحة بناء 315م لكل فيلا. تتميز “SAFA VILLAS” بتقديم حلول سكنية اقتصادية تلبي رغبة العميل وعائلته في ظل وجود خيارات متعددة من الوحدات السكنية.    
        `}
        imgSrc={ image3 }
        partId = 'projectPartId3'
        fromLeft
      />
    </div>
  );
};

const InfoPart = ({ title, description, imgSrc, fromLeft, fromRight, partId }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translate3d(0, 0, 0)'
      : fromLeft
      ? 'translate3d(-100%, 0, 0)'
      : fromRight
      ? 'translate3d(100%, 0, 0)'
      : 'translate3d(0, 100%, 0)', // Default animation for the third part
  });

  return (
    <animated.div ref={ref} style={animationProps} className={`infoPart`}>
      <div className={`infoContent ${fromLeft ? 'inforeverse' : ''}`} id={partId}>
        <div className="infoText">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="infoImage">
          <img src={imgSrc} alt={`Part ${title}`} loading="lazy" />
        </div>
      </div>
    </animated.div>
  );
};

export default InfoComponent;
```

This component showcases information about different projects.

- **useInView and useSpring:** These hooks are used for animation effects when the project information comes into view.
- **JSX Structure:**
    - Displays information about each project (`<InfoPart>` component) including title, description, and image.
- **Props:**
    - `title`: Title of the project.
    - `description`: Description of the project.
    - `imgSrc`: Source of the image representing the project.
    - `fromLeft` or `fromRight`: Determines the animation direction.
    - `partId`: Unique identifier for each project part.
- **CSS Styles:**
    - The component relies on an external CSS file (`InfoComponent.css`) for styling.

##### Here's a breakdown of the code:
1. Import necessary modules and styles:
    
    - `React`: The core React library.
    - `useSpring`, `animated` from `react-spring`: Used for animating components.
    - `useInView` from `react-intersection-observer`: Used for detecting when the component is in the viewport.
    - Stylesheet for the info component (`InfoComponent.css`).
    - Import image assets (`image1`, `image2`, `image3`) representing project images.
2. Define the `InfoComponent` component:
    
    - Returns JSX representing the info section.
    - Renders multiple `InfoPart` components, each representing information about an individual project.
3. Define the `InfoPart` component:
    
    - Accepts props for `title`, `description`, `imgSrc`, `fromLeft`, `fromRight`, and `partId`.
    - Uses the `useInView` hook to detect when the component enters the viewport.
    - Uses the `useSpring` hook to animate the component's appearance based on whether it's in the viewport or not, and the direction (`fromLeft`, `fromRight`).
    - Returns an animated `<div>` element containing project information, with text and an image.
4. Export the `InfoComponent` component as the default export.

This component creates a section on the webpage to display information about different projects. Each project is represented by an `InfoPart` component, which contains project title, description, and image. The `InfoComponent` handles animation and intersection observer logic, while `InfoPart` is responsible for rendering individual project information.
### Component 8: About-Us Component

```jsx
import React, { useEffect, useRef } from 'react';
import './CompanyIntro.css';
  
import DiyarahLogo from '/Images/Icons/icon4.png'
import Building1  from './Buildingds/Building1.webp'
import Building2  from './Buildingds/Building2.webp'
import Building3  from './Buildingds/Building3.webp'
import Building4  from './Buildingds/Building5.webp'

const CompanyIntro = () => {
  const professionalIntroRef = useRef(null);
  useEffect(() => {
    const handleAnimation = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };

    const introObserver = new IntersectionObserver(handleAnimation, {
      threshold: 0.5,
    });

    if (professionalIntroRef.current) {
      introObserver.observe(professionalIntroRef.current);
    }

    return () => {
      if (professionalIntroRef.current) {
        introObserver.unobserve(professionalIntroRef.current);
      }
    };
  }, []);

  return (
    <div className="professional-intro-container">
        <h1>من نحن و ما هي قيمنا</h1>
      <div className="professional-intro-section">
        <div id='alogoDiv'>
            <img src={DiyarahLogo} alt="Logo" className="alogo" loading="lazy" />
        </div>
        <p id='heroP'>
        تقدم شركة ديارة العقارية تجربة استثنائية في عالم العقارات، حيث يتميز عملنا بالاحترافية واحترام الخصوصية. نحن نفخر بتقديم خدمات عقارية شاملة تشمل البيع والشراء وإدارة العقارات. يتميز فريقنا بالتفرد في التعامل مع كل عميل، مع التركيز الكامل على تلبية احتياجاتهم الفريدة. نحن نلتزم بحماية خصوصية عملائنا وضمان أمان معلوماتهم. تقنياتنا المتقدمة والابتكار تضمن لعملائنا تجربة متميزة وفعّالة. بفهم عميق لسوق العقارات واستخدام التكنولوجيا، نسعى دائمًا لتحقيق أعلى قيمة لعملائنا. اكتشف الفرق مع ديارة العقارية، حيث نسهم في بناء مستقبلك بكفاءة واستدامة.
        </p>
      </div>
      {/* Section 1 */}
      <div className="professional-intro-section">
        <div className="professional-intro-text">
          <h2>احترافية في التعامل</h2>
          <p>
            بفخر واعتزاز يعكس روح الاحتراف والتميز، تتجلى أهمية العمل بديارة العقارية. نحن هنا لنقدم لكم تجربة تعامل استثنائية تتسم بالرقي والدقة في كل جانب من جوانب خدماتنا.

            يتميز فريقنا المتخصص والمحترف بتقديم خدمات عالية الجودة، حيث يضع كل فرد منهم خبراته ومهاراته في خدمة تحقيق تطلعات العملاء. نحن نفهم أن الثقة التي يضعها العملاء فينا تتطلب رعاية خاصة، ولذلك نسعى دائماً لتلبية تلك التوقعات بكفاءة وأمانة.  
            
            نهتم بكل تفصيل من تفاصيل خدماتنا، سعياً منا لضمان رضاكم التام وتحقيق توقعاتكم بشكل فعّال. إننا نعمل بروح الفريق الواحد، متحدين لتقديم أفضل الحلول والمشاريع العقارية التي تلبي تطلعاتكم وتتجاوز توقعاتكم.

            في ديارة العقارية، نعتبر الاحترافية ليست مجرد سمة، بل هي أسلوب حياة نتبناه لتقديم أفضل خدمة ممكنة. تواصلوا معنا اليوم لتجربة فريدة في عالم العقارات، حيث الجودة والالتزام هما سمتنا الأساسية.
          </p>
        </div>
        <img
          src= {Building1}
          alt="Professional Image 1"
          className="animated-image"
          id='Building1'
          loading="lazy"
        />
      </div>
      
      {/* Section 2 */}
      <div className="professional-intro-section reverse">
        <img
          src={Building2}
          alt="Professional Image 2"
          className="animated-image"
          id='Building2'
          loading="lazy"
        />
        <div className="professional-intro-text">
          <h2>احترام الخصوصية</h2>
          <p>
            نعتبر حفاظنا على خصوصية عملائنا أمرًا لا يُساوم عليه. تُعَدُّ سياستنا الراسخة في احترام الخصوصية وتأمين المعلومات من بين أبرز أولوياتنا، حيث نسعى جاهدين لضمان توفير تجربة آمنة وقائمة على الثقة.

            يُمثِّل احترام خصوصية عملائنا جزءًا أساسيًا من رؤيتنا، حيث نعمل بتفانٍ لحماية كل تفصيلة من تفاصيل المعلومات التي تُعَدُّ ثقةً قائمة بيننا وبينكم. إننا نعتبر حقوق الخصوصية حقوقًا لا يمكن المساس بها، ونسعى دائمًا لتطوير وتحسين سياساتنا وإجراءاتنا لضمان استمرارية الحماية والأمان.

            تجسّد جهودنا المتواصلة في مجال حماية الخصوصية التزامًا راسخًا بتوفير بيئة آمنة وموثوقة لكل عميل. يُشكّل الحفاظ على خصوصية معلوماتكم جزءًا لا يتجزأ من مهمتنا، ونضعها في صلب كل خطوة نقوم بها لضمان راحتكم وسلامة معلوماتكم.
          </p>
        </div>
      </div>
  
      {/* Section 3 */}
      <div className="professional-intro-section">
        <div className="professional-intro-text">
          <h2>تميز فريد في مجال العقارات</h2>
          <p>
            نحن نتسم بالتميز اللافت في تقديم خدماتنا العقارية. ما يميزنا هو الاهتمام الفائق بتلبية احتياجات كل عميل بشكل فريد، حيث نقدم حلاً فريدًا يتناسب مع متطلباته الخاصة، مما يضفي على تجربته معنا طابعًا استثنائيًا ومميزًا.

            نحن نؤمن بأن كل عميل يمتلك احتياجات ورغبات فريدة، ولذلك فإننا نخصص الوقت اللازم لفهم تلك الاحتياجات بدقة. يقدم فريقنا المختص حلاً مخصصًا لكل عميل، مع التركيز على توفير تجربة شخصية تتجاوز التوقعات.

            نحن نعتبر التميز ليس مجرد هدف، بل هو أسلوب حياة نتبعه في كل مرحلة من مراحل خدماتنا العقارية. إن الاهتمام بأدق التفاصيل وتقديم حلاً فريدًا يميزنا ويجعل عملاؤنا يشعرون بالاطمئنان والفخر بتجربتهم الاستثنائية معنا.
          </p>
        </div>
        <img
          src={Building3}
          alt="Professional Image 3"
          className="animated-image"
          id='Building3'
          loading="lazy"
        />
      </div>

      {/* Section 4 */}
      <div className="professional-intro-section reverse">
        <img
          src={Building4}
          alt="Professional Image 4"
          className="animated-image"
          id='Building4'
          loading="lazy"
        />
        <div className="professional-intro-text">
          <h2>تقنيات متقدمة وابتكار</h2>
          <p>
            في مجال العقارات، نضع نصب أعيننا التقنيات الحديثة وروح الابتكار لتقديم خدمات متميزة. نعتمد على أحدث التطورات التكنولوجية والابتكارات لتحقيق حلول متطورة وفعّالة تلبي توقعات واحتياجات عملائنا، مما يعزز مكانتنا كشركة رائدة في السوق.

            نحن ندرك أهمية التكنولوجيا في تحسين تجارب العملاء وتسهيل العمليات. لذلك، نجمع بين استخدام أحدث الأدوات التكنولوجية والابتكار في كل جانب من جوانب خدماتنا. يسهم تكامل التقنيات المتقدمة في تسهيل العمليات وتحسين كفاءة تقديم الخدمات، مما يمنح عملائنا تجربة فريدة ومتميزة.

            باعتبارنا روادًا في مجالنا، نلتزم بالبحث المستمر عن أحدث التقنيات والابتكارات لضمان استمرارية تقديم خدمات عالية الجودة وتميزنا كشركة تتبنى التقدم التكنولوجي.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntro;
```

This component provides an introduction to the company, highlighting its values and key aspects of its services.

- **useEffect and useRef:** These hooks are used to trigger animations when certain elements come into view.
- **JSX Structure:**
    - Displays a heading (`<h1>`) indicating the purpose of the section.
    - Contains a div (`<div>`) with the class name `professional-intro-section`, which includes:
        - The company logo (`<img>`).
        - A paragraph (`<p>`) describing the company's mission and values.
    - Divided into multiple sections, each with a heading and a description, along with an accompanying image.
- **Props:**
    - None
- **CSS Styles:**
    - The component relies on an external CSS file (`CompanyIntro.css`) for styling.

##### Here's a breakdown of the code:
1. Import necessary modules and styles:
    
    - `React`: The core React library.
    - `useEffect`, `useRef` from React: Hooks for managing side effects and accessing DOM elements.
    - Stylesheet for styling the component (`CompanyIntro.css`).
    - Import image assets representing the company logo and various buildings.
2. Define the `CompanyIntro` component:
    
    - Uses the `useRef` and `useEffect` hooks to trigger animations when certain elements become visible in the viewport.
    - The `useEffect` hook sets up an intersection observer to detect when the `professionalIntroRef` element becomes visible, triggering the animation.
    - Returns JSX representing the company introduction section, divided into several subsections.
    - Each subsection includes text describing different aspects of the company's values and services, along with corresponding images.
3. Export the `CompanyIntro` component as the default export.
    

This component creates a visually appealing introduction section for the company, showcasing its values and services with descriptive text and images. The animations enhance the user experience by adding visual interest as the user scrolls through the content.
### Component 9: Location Component

```jsx
import React from 'react';
import './Styles/GoogleMapSection.css'; // Import your CSS file

const GoogleMapSection = () => {
  return (
    <section id="map">
      <h2>موقعنا</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3624.9772205331587!2d46.60021878500041!3d24.693309784133046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQxJzM1LjkiTiA0NsKwMzUnNTIuOSJF!5e0!3m2!1sar!2seg!4v1702244390066!5m2!1sar!2seg"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        id="mapframe"
      ></iframe>
    </section>
  );
}

export default GoogleMapSection;
```

This component displays the company's location using Google Maps.

- **JSX Structure:**
    - Contains a section (`<section>`) with the id `map`.
    - Includes an iframe (`<iframe>`) with the embedded Google Maps location.
- **Props:**
    - None
- **CSS Styles:**
    - The component relies on an external CSS file (`GoogleMapSection.css`) for styling.

##### Here's a breakdown of the code:
1. Import necessary modules and styles:
    
    - `React`: The core React library.
    - Stylesheet for styling the component (`GoogleMapSection.css`).
2. Define the `GoogleMapSection` component:
    
    - Returns JSX representing a section containing a Google Map.
    - Includes a title "موقعنا" (Our Location) to indicate the purpose of the section.
    - Embeds a Google Map using an iframe element with the source URL pointing to the Google Maps embed API.
    - The `allowfullscreen` attribute allows the map to be viewed in fullscreen mode.
    - The `loading="lazy"` attribute defers loading of the iframe until it's within the viewport, improving performance.
    - The `referrerpolicy="no-referrer-when-downgrade"` attribute specifies the referrer policy for the embedded content.
    - The iframe has an id of "mapframe" for potential future reference or manipulation.
3. Export the `GoogleMapSection` component as the default export.
    

This component provides users with a visual representation of the company's location using Google Maps, allowing them to interact with the map if necessary.
### Components 10, 11, 12: Copyrighting Components
#### Intellectual Property Rights:

```jsx
import React from 'react';
import './IntellectualPropertyRights.css';
import DiyarahLogo from '/Images/Icons/icon4.png'

const IntellectualPropertyRights = () => {
  return (
    <div className="intellectual-property-rights-container">
      <header>
        <h1 className="intellectual-property-rights-title">حقوق الملكية الفكرية</h1>
      </header>

      <section>
        <p className="intellectual-property-rights-text">
          نحن في شركة ديارة العقارية نضع حقوق الملكية الفكرية في أولويتنا. جميع الحقوق الملكية الفكرية للمحتوى الذي نقدمه، سواء كانت صورًا، نصوصًا، أو أي مواد أخرى، تعود بالكامل إلى شركتنا.
        </p>
        <p className="intellectual-property-rights-text">
          يُمنع استخدام أو نقل أو تعديل أو نسخ أو نشر أو توزيع أي جزء من محتوانا دون الحصول على إذن كتابي منا. نحن نحتفظ بحقوقنا الكاملة ونتخذ جميع الإجراءات القانونية لحماية حقوقنا في حال حدوث انتهاك.
        </p>
      </section>

      <section>
        <h2>تراخيص الاستخدام</h2>
        <p>
          يُمنح للمستخدمين ترخيص غير حصري وغير قابل للانتقال لاستخدام خدماتنا ومحتوانا بموجب هذه الشروط والأحكام. ومع ذلك، يجب على المستخدمين الامتناع عن استخدام المحتوى بطرق تتعارض مع حقوق الملكية الفكرية المذكورة.
        </p>
      </section>

      <section>
        <h2>التعويض</h2>
        <p>
          يوافق المستخدمون على تعويض شركة ديارة العقارية وحمايتها من أي مطالبات أو خسائر تنشأ عن استخدامهم لخدماتنا أو انتهاكهم لحقوق الملكية الفكرية.
        </p>
      </section>

      <section>
        <h2>الاستخدام الشرعي</h2>
        <p>
          نحن نشجع على استخدام محتوانا بطرق تتوافق مع القوانين والأنظمة. يجب أن يكون الاستخدام الشرعي لمحتوانا في إطار القوانين الوطنية والدولية ذات الصلة.
        </p>
      </section>

      <section>
        <h2>الاستشارة القانونية</h2>
        <p>
          يُفضل دائمًا استشارة مستشار قانوني قبل استخدام أو تعديل أو نشر أي جزء من محتوانا، خاصة إذا كان الاستخدام ينطوي على استخدام تجاري أو تعديل للمحتوى.
        </p>
      </section>

      <section>
        <h2>الابتكار والتعاون</h2>
        <p>
          نحن مفتوحون دائمًا للتفاوض والتعاون فيما يتعلق بحقوق الملكية الفكرية. إذا كنتم مهتمين بالاستفادة من محتوانا بطرق معينة، يرجى التواصل مع فريقنا لمناقشة الاتفاقيات والتفاصيل.
        </p>
      </section>

      <section>
        <h2>شكرًا لاستخدام خدماتنا</h2>
        <p>
         نقدر اختياركم لاستخدام خدماتنا، ونتطلع دائمًا إلى تقديم محتوى عالي الجودة مع احترام تام لحقوق الملكية الفكرية.
        </p>
      </section>

      <div id='plogoDiv'>
        <img src={DiyarahLogo} alt="Company Logo" className="plogo" loading="lazy" />
      </div>
      
    </div>
  );
}; 

export default IntellectualPropertyRights;
```
#### Privacy Policy:

```jsx
import React from 'react';
import './PrivacyPloicy.css'; // Import your CSS file
import DiyarahLogo from '/Images/Icons/icon4.png'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <header>
        <h1 className="privacy-policy-title">سياسة الخصوصية لشركة ديارة العقارية</h1>
      </header>

      <section>
        <p className="privacy-policy-text">
          نرحب بكم في شركة ديارة العقارية، حيث نهتم بحماية خصوصيتكم ونسعى لتوفير تجربة آمنة أثناء تفاعلكم مع خدماتنا. تهدف هذه الوثيقة إلى توضيح كيفية جمعنا واستخدامنا للمعلومات الشخصية وكيف نحمي هذه المعلومات.
        </p>
      </section> 

      <section>
        <h2>1. جمع المعلومات</h2>
        <p>نقوم بجمع بيانات محددة لتقديم خدماتنا بشكل فعال. يتم ذلك من خلال نماذج التسجيل، ونماذج الاتصال، ونماذج حجز الوحدات السكنية. نحن نسعى جاهدين لضمان دقة واكتمال المعلومات التي نجمعها.</p>
      </section>

      <section>
        <h2>2. استخدام المعلومات</h2>
        <p>نستخدم المعلومات لتحسين جودة خدماتنا وتلبية احتياجاتكم. نرسل أحدث الأخبار والتحديثات عبر النشرات الإخبارية لمشتركينا، ونستخدم بيانات الاتصال للرد على استفساراتكم وتلبية طلبات الخدمة.</p>
      </section>

      <section>
        <h2>3. حماية البيانات</h2>
        <p>نلتزم بحماية بياناتكم وسرية معلوماتكم الشخصية. نتخذ إجراءات أمان فعّالة للوقاية من فقدان البيانات أو الوصول غير المصرح به.</p>
      </section>

      <section>
        <h2>4. مشاركة المعلومات</h2>
        <p>نحن لا نشارك معلوماتكم الشخصية مع أي طرف خارجي بدون موافقتكم الصريحة، إلا إذا كانت هناك حاجة قانونية لذلك.</p>
      </section>
  
      <section>
        <h2>5. الامتثال للقوانين</h2>
        <p>نلتزم بالامتثال للقوانين والتشريعات المعمول بها فيما يتعلق بحماية البيانات وحقوق الخصوصية.</p>
      </section>

      <section>
        <h2>6. حقوق العملاء</h2>
        <p>نقدم لعملائنا حق الوصول والتصحيح والتحكم في معلوماتهم الشخصية. يمكنكم سحب موافقتكم في أي وقت.</p>
      </section> 

      <section>
        <h2>7. تحديثات السياسة</h2>
        <p>نستخدم المعلومات لتحسين جودة خدماتنا وتلبية احتياجاتكم. نحتفظ بحق تحديث سياسة الخصوصية، وسنقوم بإشعاركم بأي تغييرات قد تؤثر على حقوقكم.</p>
      </section> 

      <section>
        <h2>8. التعامل مع المعلومات الائتمانية</h2>
        <p>عند طلب معلومات ائتمانية، سنقدم لكم سياسة الائتمان للتعريف بكيفية التعامل مع هذه المعلومات وكيفية الحفاظ على سريتها.</p>
      </section>

      <section>
        <h2>9. استفسارات</h2>
        <p>لأي استفسار أو توضيح حول سياسة الخصوصية، يرجى الاتصال بفريق خدمة العملاء لدينا.</p>
      </section>
  
      <section>
        <h2>10. شكرًا لثقتكم</h2>
        <p>نشكركم على ثقتكم في شركة ديارة العقارية. نحن نعمل جاهدين لتقديم خدمات عالية الجودة مع احترام تام لخصوصيتكم وحقوقكم.</p>
      </section>

      <div id='plogoDiv'>
        <img src={DiyarahLogo} alt="Company Logo" className="plogo" loading="lazy" />
      </div>

    </div>
  );
};

export default PrivacyPolicy;
```
#### Terms And Conditions:

```jsx
import React from 'react';
import './TermsAndConditions.css'; // Import your CSS file
import DiyarahLogo from '/Images/Icons/icon4.png'

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions-container">
      <header>
        <h1 className="terms-and-conditions-title">شروط وأحكام الاستخدام</h1>
      </header>

      <section>
        <p className="terms-and-conditions-text">
          نرحب بكم في صفحة شروط وأحكام الاستخدام لشركة ديارة العقارية. يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا. يعتبر استخدامكم للخدمات تأكيدًا على موافقتكم والالتزام بتلك الشروط والأحكام.
        </p>
      </section>
  
      <section>
        <h2>1. الاستخدام والوصول</h2>
        <p>نمنحكم ترخيصًا غير حصري وغير قابل للانتقال للوصول واستخدام خدماتنا وفقًا لهذه الشروط والأحكام. يجب عليكم عدم نقل أو مشاركة تفاصيل الوصول الخاصة بكم مع أي شخص آخر.</p>
      </section>
  
      <section>
        <h2>2. المحتوى والحقوق</h2>
        <p>جميع الحقوق الملكية الفكرية للمحتوى المقدم من خلال خدماتنا تعود إلى شركة ديارة العقارية. يجب عليكم عدم استخدام أو نسخ أو نشر أو نقل أي جزء من المحتوى دون إذن كتابي.</p>
      </section>
  
      <section>
        <h2>3. التزامات المستخدم</h2>
        <p>عند استخدام خدماتنا، يجب عليكم الامتناع عن نشر أو نقل أي محتوى يكون مسيئًا أو غير قانوني. نحتفظ بالحق في حظر الوصول لأي مستخدم يخالف هذه التزامات.</p>
      </section>
  
      <section>
        <h2>4. التعويض</h2>
        <p>أنتم توافقون على تعويض شركة ديارة العقارية وحمايتها من أي مطالبات أو خسائر ناتجة عن استخدامكم لخدماتنا أو انتهاككم لهذه الشروط والأحكام.</p>
      </section>
  
      <section>
      <h2>5. شكرًا لاستخدامكم خدماتنا</h2>
        <p>
         نقدر اختياركم لاستخدام خدماتنا في مجال العقارات. نحن نسعى دائمًا لتوفير تجربة ممتازة وفعّالة لمستخدمينا.
        </p>
      </section>

      <div id='plogoDiv'>
        <img src={DiyarahLogo} alt="Company Logo" className="plogo" loading="lazy" />
      </div>

    </div>
  );
};

export default TermsAndConditions;
```

These components are React functional components that represent different sections of a website related to copyrighting components: Intellectual Property Rights, Privacy Policy, and Terms and Conditions. Each component contains JSX (JavaScript XML) code to define the structure and content of the respective section. Additionally, CSS files are imported to style each component.

Here's a summary of each component:

1. **IntellectualPropertyRights**: This component represents the section of the website dedicated to explaining intellectual property rights. It includes information about the company's prioritization of intellectual property rights, restrictions on the use of content, licensing, compensation, legal usage, legal consultation, innovation, collaboration, and gratitude for using the services.
    
2. **PrivacyPolicy**: This component represents the privacy policy section of the website. It includes information about data collection, data usage, data protection, data sharing, compliance with laws, customer rights, policy updates, handling of credit information, inquiries, and appreciation for trust.
    
3. **TermsAndConditions**: This component represents the terms and conditions section of the website. It includes information about usage and access, content and rights, user obligations, indemnification, and appreciation for using the services.
    

Each component follows a similar structure, with a header containing a title, multiple sections containing relevant information, and a footer containing the company logo. The components are designed to be reusable and easily integrated into the website's overall structure.
### Component 13: Footer Component

```jsx
import React from 'react';
import './Styles/Footer.css';

import DiyarahLogo from '/Images/Icons/icon4.png'
import WhatsappLogo from '/Images/Social/whatsapp.png'
import FacebookLogo from '/Images/Social/facebook.png'
import LinkedinLogo from '/Images/Social/linkedin.png'
import Twitter_Logo from '/Images/Social/twitter.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div id='footerLogo'>
          <a href="/">
            <img src={DiyarahLogo} alt="Company Logo" className="logo" loading="lazy" />
          </a>
          <br />
        </div>
            <div className="footer-content">
                <h3>روابط هامة</h3>
                <p><a href="/terms-and-conditions" target='_blank'>الشروط و الأحكام </a></p> <br />
                <p><a href="/intellectual-property" target="_blank">حقوق الملكية الفكرية </a></p> <br />
                <p><a href="/privacy-policy" target="_blank">سياسات الخصوصية</a></p> <br />
                <p><a href="/location" target="_blank">موقعنا</a></p> <br />
            </div>
            <div className="footer-content" id='followUs'>
                <h3>تواصل معنا</h3>
                <div id='iconsContainer'>
                  <a href="https://www.linkedin.com" target='_blank'>
                    <img src={LinkedinLogo} alt="Linkedin Icon" loading="lazy" />
                  </a>
                  <a href="https://www.facebook.com" target='_blank'>
                    <img src={FacebookLogo} alt="Facebook Icon" loading="lazy" />
                  </a>
                  <a href="https://www.twitter.com" target='_blank'>
                    <img src={Twitter_Logo} alt="Twitter Icon" loading="lazy" />  
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=966572696382" target="_blank">
                    <img src={WhatsappLogo} alt="Whatsapp Icon" loading="lazy" />
                  </a>
                </div>
            </div>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
        <p className="copyright">© 2023 . كل الحقوق محفوظة لشركة ديارة العقارية.</p>
        <br />
        <p id='hema'>Made by <a href="https://www.linkedin.com/in/ibrahim-abu-eita-0b2490206/" target='_blank'>Ibrahim Abu Eita</a> & <a href="http://www.linkedin.com/in/salma-khaled-539847260" target="_blank"> Salma Khaled</a></p>
    </footer>
  );
}

export default Footer;
```

This React functional component represents the footer section of a website. It includes links to important pages, social media icons for contacting the company, and information about copyright and the creators of the website.

##### Here's a breakdown of the component:
- **Footer Structure**: The footer is contained within a `<footer>` element with the class name "footer".
    
- **Footer Container**: Inside the footer, there's a `<div>` element with the class name "footer-container" to contain the footer content.
    
- **Company Logo**: The company logo is displayed with an `<img>` element wrapped in an anchor `<a>` tag. Clicking on the logo redirects to the home page ("/").
    
- **Important Links**: Important links such as terms and conditions, intellectual property, privacy policy, and location are listed in a `<div>` element with the class name "footer-content". Each link is wrapped in a `<p>` element and an anchor `<a>` tag. The `target='_blank'` attribute is used to open the links in a new tab.
    
- **Social Media Icons**: Social media icons for LinkedIn, Facebook, Twitter, and WhatsApp are displayed with `<img>` elements wrapped in anchor `<a>` tags. Each icon is linked to the respective social media platform. The `target='_blank'` attribute is used to open the links in a new tab.
    
- **Copyright Information**: Information about the copyright year and the company name is displayed in a `<p>` element with the class name "copyright".
    
- **Credits**: Information about the creators of the website is displayed in a `<p>` element with the id "hema". Each creator's name is linked to their LinkedIn profile using anchor `<a>` tags. The `target='_blank'` attribute is used to open the links in a new tab.
    

The component follows a clear structure and provides easy navigation for users to access important links and contact the company through social media. Additionally, it gives credit to the creators of the website.

---
## SEO Tasks:

This document outlines the search engine optimization (SEO) elements implemented in the HTML code of the ديارة العقارية website.

### Main Meta Tags
- **Description**: Provides a concise summary of the website's content and services offered.
- **Keywords**: Contains a list of relevant keywords for search engines to understand the website's focus.
- **Author**: Specifies the author or entity responsible for the content.
- **Robots**: Instructs search engine crawlers on whether to index and follow the pages.

### Open Graph Meta Tags
- **og:locale**: Specifies the language and region for Open Graph metadata.
- **og:type**: Defines the type of content, in this case, a business entity.
- **og:title**: Title of the website as it appears on Open Graph.
- **og:description**: Description optimized for Open Graph sharing.
- **og:image**: URL of the image used when the website is shared on social media.
- **og:url**: Canonical URL of the website.

### Meta Tags for Twitter Cards
- **twitter:card**: Specifies the type of Twitter Card to use.
- **twitter:site**: Twitter handle associated with the website.
- **twitter:title**: Title of the website for Twitter Cards.
- **twitter:description**: Description optimized for Twitter Cards.
- **twitter:image**: URL of the image used when the website is shared on Twitter.

### JSON-LD
- **Organization**: Structured data in JSON-LD format describing the organization.
    - **name**: Name of the organization.
    - **url**: URL of the organization's website.
    - **logo**: URL of the organization's logo.
    - **description**: Description of the organization.
    - **address**: Postal address of the organization.
    - **contactPoint**: Contact information for customer support.

### Links
- **Canonical**: Specifies the canonical URL of the website.
- **Sitemap**: URL of the XML sitemap for search engines.
- **Robots**: URL of the robots.txt file.
- **Icon**: URL of the website's favicon.

### Google Fonts API
- **Preconnect**: Preconnects to Google Fonts API to improve font loading performance.
- **Font Link**: Link to the Google Fonts stylesheet.

### Title Tag
- Title of the website displayed on the browser tab.

---
## General Styling:

The provided CSS code contains various general styles for a webpage. Here's a summary of the general styles included:

1. **Root-Level Variables for Color Palette**:
   - Defines custom CSS variables for main color, secondary color, dark color, background color, and another darker color.

2. **Global Styling for All Elements**:
   - Applies `box-sizing: border-box` to ensure padding and border are included in the element's total width and height.
   - Sets the font family to 'Changa', a sans-serif font.

3. **Styling for Anchor Elements**:
   - Removes default underline and changes text color to the background color.
   - Adds a smooth color transition on hover to the secondary color.

4. **Styling for Buttons**:
   - Applies a smooth color transition on hover.

5. **Global Styling for the Body**:
   - Resets padding and margin.
   - Sets the background color to a very dark shade (#010102).
   - Sets text alignment to start and text direction to right-to-left for languages like Arabic.

6. **Styling for Section and Footer Elements**:
   - Sets position to relative for potential positioning adjustments.

7. **Styling for Paragraphs**:
   - Resets margin.
   - Sets text color to the secondary color.
   - Defines font size and line height.

8. **Styling for Unordered Lists**:
   - Resets padding and margin.
   - Sets display to block and adds a smooth transition.

9. **Styling for List Items**:
   - Sets display to block and removes default list styling.

10. **Responsive Styling for iframes**:
    - Sets iframes to occupy 100% width and height.

11. **Removing Outline on Interactive Elements**:
    - Removes outline on various interactive elements like input, button, and select when they are focused or active.

12. **Disabling Resizing of Textareas**:
    - Prevents resizing of textareas.

13. **Styling for the Main Content Area**:
    - Sets overflow to hidden.
    - The commented-out line suggests a potential minimum height of 100% of the viewport height.

These styles provide a foundation for consistent styling and layout across different elements of the application.

---

## Font Used:

#### [El Messiri Font](https://fonts.google.com/specimen/El+Messiri) on Google Fonts by [Mohamed Gaber](https://fonts.google.com/?query=Mohamed+Gaber) and [Jovanny Lemonad](https://fonts.google.com/?query=Jovanny+Lemonad). 

---

## Assets Plateforms:

##### 1- [Flat Icon](https://www.flaticon.com/) for Social Media Icons.

##### 2- [Brand Crowd](https://brandcrowd.com/) for Logo Making.

##### 3- [Unsplash](https://unsplash.com/) for Building Imags.

##### 4- [Shutter Stock](https://www.shutterstock.com/) for Videos.

---

## Deployment
The app is deployed on Netlify directly from the GitHub repository. Whenever changes are pushed to the `main` branch, Netlify automatically builds and deploys the latest version of the app.
### Redirection Management
To manage redirections within the app, we utilize a `_redirects` file. This file allows us to specify URL redirection rules. In this project, the `_redirects` file contains the following rule:

```
/*    /index.html   200
```

This rule ensures that any URL path within the app is redirected to the `index.html` file, allowing client-side routing to work smoothly.

### Result: [ديارة العقارية](https://voluble-bublanina-db5156.netlify.app/). 
##### Domain: diyarah.sa

### Development
If you'd like to run this project locally for development purposes, you can follow these steps:
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the development server by running `npm start`.
### Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the `main` branch of the original repository.
### Issues
If you encounter any issues or have any suggestions for improvements, please feel free to [open an issue](https://github.com/ibrahim99035/Diyarah/issues). We appreciate your feedback!
### Contact
If you have any questions or need further assistance, you can reach out to us at [ebrahimaboeita990@gmail.com](mailto:ebrahimaboeita990@gmail.com).