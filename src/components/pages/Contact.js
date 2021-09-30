import React from 'react';

export default function Contact() {
    return (
        <div>
            <h1>Contact Me</h1>
            <p><b>Email: </b><a href="mailto:ckinleydavis@gmail.com">ckinleydavis@gmail.com</a></p>
            <p><b>Schedule a Meeting: </b><a href="https://calendly.com/ckinleydavis/30min">https://calendly.com/ckinleydavis/30min</a></p>
            <p>
                {/* <!-- Calendly badge widget begin --> */}
                    <link 
                        href="https://assets.calendly.com/assets/external/widget.css" 
                        rel="stylesheet" />
                    <script 
                        src="https://assets.calendly.com/assets/external/widget.js" 
                        type="text/javascript" 
                        async>
                    </script>
                    <script type="text/javascript">
                        { window.onload = function() { 
                            Calendly.initBadgeWidget({ 
                                url: 'https://calendly.com/ckinleydavis/30min', 
                                text: 'Schedule time with me', 
                                color: '#006bff', 
                                textColor: '#ffffff', 
                                branding: true 
                            }); 
                        } }
                    </script>
                {/* <!-- Calendly badge widget end --> */}
            </p>
        </div>
    );
}