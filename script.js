const cheatSheets = {
    html:`<table>
    <tr><th></th><th>Code/Function</th><th>Description</th></tr>
    <tr><td>1</td><td>&lt;!DOCTYPE&gt;</td><td>Defines the document type and version of HTML.</td></tr>
    <tr><td>2</td><td>&lt;html&gt;</td><td>The root element of an HTML page.</td></tr>
    <tr><td>3</td><td>&lt;head&gt;</td><td>Contains meta-information about the document.</td></tr>
    <tr><td>4</td><td>&lt;title&gt;</td><td>Sets the title of the document (shown in the browser tab).</td></tr>
    <tr><td>5</td><td>&lt;meta&gt;</td><td>Defines metadata such as character set, author, etc.<br><strong>Attributes:</strong> <em>charset, name, content</em></td></tr>
    <tr><td>6</td><td>&lt;link&gt;</td><td>Links to external resources like CSS stylesheets.<br><strong>Attributes:</strong> <em>rel, href, type</em></td></tr>
    <tr><td>7</td><td>&lt;style&gt;</td><td>Defines internal CSS styles.</td></tr>
    <tr><td>8</td><td>&lt;body&gt;</td><td>Contains the content of the document.</td></tr>
    <tr><td>9</td><td>&lt;h1&gt; to &lt;h6&gt;</td><td>Defines HTML headings.</td></tr>
    <tr><td>10</td><td>&lt;p&gt;</td><td>Defines a paragraph.</td></tr>
    <tr><td>11</td><td>&lt;a&gt;</td><td>Defines a hyperlink.<br><strong>Attributes:</strong> <em>href, target, title, rel</em></td></tr>
    <tr><td>12</td><td>&lt;img&gt;</td><td>Embeds an image.<br><strong>Attributes:</strong> <em>src, alt, width, height</em></td></tr>
    <tr><td>13</td><td>&lt;div&gt;</td><td>Defines a division or section in the document.</td></tr>
    <tr><td>14</td><td>&lt;span&gt;</td><td>Defines a section in a document (inline).</td></tr>
    <tr><td>15</td><td>&lt;ul&gt;</td><td>Defines an unordered list.</td></tr>
    <tr><td>16</td><td>&lt;ol&gt;</td><td>Defines an ordered list.</td></tr>
    <tr><td>17</td><td>&lt;li&gt;</td><td>Defines a list item.</td></tr>
    <tr><td>18</td><td>&lt;table&gt;</td><td>Defines a table.</td></tr>
    <tr><td>19</td><td>&lt;tr&gt;</td><td>Defines a row in a table.</td></tr>
    <tr><td>20</td><td>&lt;th&gt;</td><td>Defines a header cell in a table.</td></tr>
    <tr><td>21</td><td>&lt;td&gt;</td><td>Defines a cell in a table.</td></tr>
    <tr><td>22</td><td>&lt;form&gt;</td><td>Defines an HTML form for user input.</td></tr>
    <tr><td>23</td><td>&lt;input&gt;</td><td>Defines an input control.<br><strong>Attributes:</strong> <em>type, name, value, placeholder</em></td></tr>
    <tr><td>24</td><td>&lt;textarea&gt;</td><td>Defines a multi-line text input control.</td></tr>
    <tr><td>25</td><td>&lt;button&gt;</td><td>Defines a clickable button.</td></tr>
    <tr><td>26</td><td>&lt;select&gt;</td><td>Defines a drop-down list.</td></tr>
    <tr><td>27</td><td>&lt;option&gt;</td><td>Defines an option in a drop-down list.</td></tr>
    <tr><td>28</td><td>&lt;label&gt;</td><td>Defines a label for an &lt;input&gt; element.</td></tr>
    <tr><td>29</td><td>&lt;fieldset&gt;</td><td>Groups related elements in a form.</td></tr>
    <tr><td>30</td><td>&lt;legend&gt;</td><td>Defines a caption for a &lt;fieldset&gt;.</td></tr>
    <tr><td>31</td><td>&lt;iframe&gt;</td><td>Defines an inline frame.</td></tr>
    <tr><td>32</td><td>&lt;script&gt;</td><td>Defines a client-side script.<br><strong>Attributes:</strong> <em>src, type</em></td></tr>
    <tr><td>33</td><td>&lt;noscript&gt;</td><td>Defines alternative content for users that have disabled scripts.</td></tr>
    <tr><td>34</td><td>&lt;video&gt;</td><td>Defines a video or movie.<br><strong>Attributes:</strong> <em>controls, autoplay, loop, src</em></td></tr>
    <tr><td>35</td><td>&lt;audio&gt;</td><td>Defines sound content.<br><strong>Attributes:</strong> <em>controls, autoplay, loop, src</em></td></tr>
    <tr><td>36</td><td>&lt;canvas&gt;</td><td>Used to draw graphics on the fly via JavaScript.</td></tr>
    <tr><td>37</td><td>&lt;svg&gt;</td><td>Defines scalable vector graphics.</td></tr>
    <tr><td>38</td><td>&lt;embed&gt;</td><td>Defines a container for an external application or interactive content.</td></tr>
    <tr><td>39</td><td>&lt;object&gt;</td><td>Defines an embedded object.</td></tr>
    <tr><td>40</td><td>&lt;param&gt;</td><td>Defines parameters for an &lt;object&gt; element.</td></tr>
    <tr><td>41</td><td>&lt;map&gt;</td><td>Defines an image map.</td></tr>
    <tr><td>42</td><td>&lt;area&gt;</td><td>Defines a clickable area within an image map.<br><strong>Attributes:</strong> <em>coords, shape, href</em></td></tr>
    <tr><td>43</td><td>&lt;q&gt;</td><td>Defines a short quotation.</td></tr>
    <tr><td>44</td><td>&lt;blockquote&gt;</td><td>Defines a section that is quoted from another source.</td></tr>
    <tr><td>45</td><td>&lt;cite&gt;</td><td>Defines the title of a work.</td></tr>
    <tr><td>46</td><td>&lt;abbr&gt;</td><td>Defines an abbreviation or acronym.</td></tr>
    <tr><td>47</td><td>&lt;time&gt;</td><td>Defines a specific time (date, hour, etc.).</td></tr>
    <tr><td>48</td><td>&lt;progress&gt;</td><td>Represents the progress of a task.</td></tr>
    <tr><td>49</td><td>&lt;meter&gt;</td><td>Represents a measurement within a known range.</td></tr>
    <tr><td>50</td><td>&lt;details&gt;</td><td>Defines additional details that the user can view or hide.</td></tr>
    <tr><td>51</td><td>&lt;summary&gt;</td><td>Defines a summary for &lt;details&gt;.</td></tr>
    <tr><td>52</td><td>&lt;dialog&gt;</td><td>Defines a dialog box or other interactive component.</td></tr>
    <tr><td>53</td><td>&lt;template&gt;</td><td>Defines a container for content that should not be rendered when the page loads.</td></tr>
    <tr><td>54</td><td>&lt;slot&gt;</td><td>Defines a placeholder for user-defined content in web components.</td></tr>
    <tr><td>55</td><td>&lt;noscript&gt;</td><td>Defines alternative content for users that have disabled scripts.</td></tr>
    <tr><td>56</td><td>&lt;script&gt;</td><td>Defines a client-side script.<br><strong>Attributes:</strong> <em>src, type</em></td></tr>
    <tr><td>57</td><td>&lt;audio&gt;</td><td>Used to embed audio content in a document.</td></tr>
<tr><td>58</td><td>&lt;video&gt;</td><td>Used to embed video content in a document.</td></tr>
<tr><td>59</td><td>&lt;map&gt;</td><td>Defines an image map with clickable areas.</td></tr>
<tr><td>60</td><td>&lt;iframe&gt;</td><td>Creates an inline frame to embed another document.</td></tr>
<tr><td>61</td><td>&lt;meta&gt;</td><td>Provides metadata about the HTML document.</td></tr>
<tr><td>62</td><td>&lt;datalist&gt;</td><td>Provides an autocomplete feature on &lt;input&gt; elements.</td></tr>
<tr><td>63</td><td>&lt;progress&gt;</td><td>Displays the completion progress of a task.</td></tr>
<tr><td>64</td><td>&lt;output&gt;</td><td>Represents the result of a calculation or user action.</td></tr>
<tr><td>65</td><td>&lt;template&gt;</td><td>Defines a template that is not rendered when the page loads.</td></tr>
<tr><td>66</td><td>&lt;details&gt;</td><td>Creates a disclosure widget from which the user can obtain additional information.</td></tr>
<tr><td>67</td><td>&lt;summary&gt;</td><td>Defines a summary for a &lt;details&gt; element.</td></tr>
<tr><td>68</td><td>&lt;meter&gt;</td><td>Represents a scalar measurement within a known range.</td></tr>
<tr><td>69</td><td>&lt;link&gt;</td><td>Defines the relationship between a document and an external resource (most used for stylesheets).</td></tr>
<tr><td>70</td<td>&lt;time&gt;</td><td>Represents a specific period in time.</td></tr>
<tr><td>71</td><td>&lt;address&gt;</td><td>Indicates the contact information for the author/owner of a document or article.</td></tr>
<tr><td>72</td><td>&lt;main&gt;</td><td>Represents the main content of the document.</td></tr>
<tr><td>73</td><td>&lt;figure&gt;</td><td>Specifies self-contained content, like illustrations, diagrams, or photos.</td></tr>
<tr><td>74</td><td>&lt;figcaption&gt;</td><td>Provides a caption for a &lt;figure&gt; element.</td></tr>
<tr><td>75</td><td>&lt;fieldset&gt;</td><td>Groups related elements in a form.</td></tr>
<tr><td>76</td><td>&lt;legend&gt;</td><td>Defines a caption for a &lt;fieldset&gt; element.</td></tr>
<tr><td>77</td><td>&lt;data&gt;</td><td>Links a machine-readable translation with content.</td></tr>

</table>`,
css:`<table>
    <tr><th></th><th>Concept</th><th>Code</th><th>Description</th></tr>
    <tr><td>1</td><td>CSS Syntax</td><td>The rules for writing CSS, including selectors, properties, and values.<br><strong>Example:</strong><br><code>selector { property: value; }</code></td></tr>
    <tr><td>2</td><td>CSS Selectors</td><td>Patterns used to select elements to apply styles to them.<br><strong>Example:</strong><br><code>p { color: red; }</code></td></tr>
    <tr><td>3</td><td>CSS How To</td><td>Guidelines and best practices for using CSS effectively.</td></tr>
    <tr><td>4</td><td>CSS Comments</td><td>Used to leave notes in your CSS code.<br><strong>Example:</strong><br><code>/* This is a comment */</code></td></tr>
    <tr><td>5</td><td>CSS Colors</td><td>Specifies the color of elements using various formats.<br><strong>Example:</strong><br><code>color: #ff0000;</code></td></tr>
    <tr><td>6</td><td>CSS Backgrounds</td><td>Sets background styles for elements.<br><strong>Example:</strong><br><code>background-color: blue;</code></td></tr>
    <tr><td>7</td><td>CSS Borders</td><td>Defines the border around elements.<br><strong>Example:</strong><br><code>border: 1px solid black;</code></td></tr>
    <tr><td>8</td><td>CSS Margins</td><td>Controls the space outside an element.<br><strong>Example:</strong><br><code>margin: 20px;</code></td></tr>
    <tr><td>9</td><td>CSS Padding</td><td>Controls the space inside an element, between the content and the border.<br><strong>Example:</strong><br><code>padding: 15px;</code></td></tr>
    <tr><td>10</td><td>CSS Height/Width</td><td>Defines the height and width of elements.<br><strong>Example:</strong><br><code>width: 100px;</code></td></tr>
    <tr><td>11</td><td>CSS Box Model</td><td>The model that describes the structure of elements, including margins, borders, padding, and content.</td></tr>
    <tr><td>12</td><td>CSS Outline</td><td>Defines an outline around an element, similar to borders but does not take up space.<br><strong>Example:</strong><br><code>outline: 2px dashed red;</code></td></tr>
    <tr><td>13</td><td>CSS Text</td><td>Controls the styling of text elements.<br><strong>Example:</strong><br><code>text-align: center;</code></td></tr>
    <tr><td>14</td><td>CSS Fonts</td><td>Defines font styles for text.<br><strong>Example:</strong><br><code>font-family: Arial, sans-serif;</code></td></tr>
    <tr><td>15</td><td>CSS Icons</td><td>Methods to include icons in web design, often using icon fonts or SVGs.</td></tr>
    <tr><td>16</td><td>CSS Links</td><td>Styles for hyperlink elements.<br><strong>Example:</strong><br><code>a { color: blue; text-decoration: none; }</code></td></tr>
    <tr><td>27</td><td>CSS Lists</td><td>Styles for ordered and unordered lists.<br><strong>Example:</strong><br><code>ul { list-style-type: square; }</code></td></tr>
    <tr><td>18</td><td>CSS Tables</td><td>Styles for table elements, including borders and spacing.<br><strong>Example:</strong><br><code>table { border-collapse: collapse; }</code></td></tr>
    <tr><td>19</td><td>CSS Display</td><td>Defines the display type of elements (block, inline, flex, grid, etc.).<br><strong>Example:</strong><br><code>display: block;</code></td></tr>
    <tr><td>20</td><td>CSS Max-width</td><td>Sets the maximum width of an element.<br><strong>Example:</strong><br><code>max-width: 600px;</code></td></tr>
    <tr><td>21</td><td>CSS Position</td><td>Defines how an element is positioned in the document.<br><strong>Example:</strong><br><code>position: absolute;</code></td></tr>
    <tr><td>22</td><td>CSS Z-index</td><td>Controls the vertical stacking order of elements.<br><strong>Example:</strong><br><code>z-index: 10;</code></td></tr>
    <tr><td>23</td><td>CSS Overflow</td><td>Controls the behavior when content overflows an element's box.<br><strong>Example:</strong><br><code>overflow: hidden;</code></td></tr>
    <tr><td>24</td><td>CSS Float</td><td>Allows elements to be positioned to the left or right, allowing text to wrap around them.<br><strong>Example:</strong><br><code>float: left;</code></td></tr>
    <tr><td>25</td><td>CSS Inline-block</td><td>Allows elements to be displayed inline while retaining block properties.<br><strong>Example:</strong><br><code>display: inline-block;</code></td></tr>
    <tr><td>26</td><td>CSS Align</td><td>Controls the alignment of elements.<br><strong>Example:</strong><br><code>text-align: center;</code></td></tr>
    <tr><td>27</td><td>CSS Combinators</td><td>Selects elements based on their relationship with other elements (descendant, child, adjacent sibling, general sibling).<br><strong>Example:</strong><br><code>div > p {}</code></td></tr>
    <tr><td>28</td><td>CSS Pseudo-classes</td><td>Styles elements based on their state (e.g., hover, focus).<br><strong>Example:</strong><br><code>a:hover { color: red; }</code></td></tr>
    <tr><td>29</td><td>CSS Pseudo-elements</td><td>Styles a specific part of an element (e.g., first line, first letter).<br><strong>Example:</strong><br><code>p::first-line { font-weight: bold; }</code></td></tr>
    <tr><td>30</td><td>CSS Opacity</td><td>Controls the transparency of an element.<br><strong>Example:</strong><br><code>opacity: 0.5;</code></td></tr>
    <tr><td>31</td><td>CSS Navigation Bar</td><td>Styles for creating navigation menus.</td></tr>
    <tr><td>32</td><td>CSS Dropdowns</td><td>Styles for dropdown menus.</td></tr>
    <tr><td>33</td><td>CSS Image Gallery</td><td>Styles for displaying a gallery of images.</td></tr>
    <tr><td>34</td><td>CSS Image Sprites</td><td>Combines multiple images into one to reduce HTTP requests.</td></tr>
    <tr><td>35</td><td>CSS Attr Selectors</td><td>Selects elements based on attributes.<br><strong>Example:</strong><br><code>[type="text"] {}</code></td></tr>
    <tr><td>36</td><td>CSS Forms</td><td>Styles for HTML form elements.</td></tr>
    <tr><td>37</td><td>CSS Counters</td><td>Enables automatic numbering of elements.<br><strong>Example:</strong><br><code>counter-reset: section;</code></td></tr>
    <tr><td>38</td><td>CSS Website Layout</td><td>Techniques for creating responsive layouts.</td></tr>
    <tr><td>39</td><td>CSS Units</td><td>Different units used in CSS (px, em, rem, %).<br><strong>Example:</strong><br><code>font-size: 16px;</code></td></tr>
    <tr><td>40</td><td>CSS Specificity</td><td>Determines which CSS rule is applied by calculating the specificity of selectors.</td></tr>
    <tr><td>41</td><td>CSS !important</td><td>Overrides other styles by adding !important.<br><strong>Example:</strong><br><code>color: blue !important;</code></td></tr>
    <tr><td>42</td><td>CSS Math Functions</td><td>Functions like calc() for dynamic calculations.<br><strong>Example:</strong><br><code>width: calc(100% - 50px);</code></td></tr>
    <tr><td>43</td><td>CSS Advanced</td><td>Techniques and properties for advanced styling.</td></tr>
    <tr><td>44</td><td>CSS Rounded Corners</td><td>Styles for creating rounded corners using border-radius.<br><strong>Example:</strong><br><code>border-radius: 10px;</code></td></tr>
    <tr><td>45</td><td>CSS Border Images</td><td>Uses images as borders around elements.<br><strong>Example:</strong><br><code>border-image: url(border.png) 30 stretch;</code></td></tr>
    <tr><td>46</td><td>CSS Gradients</td><td>Creates smooth transitions between two or more colors.<br><strong>Example:</strong><br><code>background: linear-gradient(to right, red, blue);</code></td></tr>
    <tr><td>47</td><td>CSS Shadows</td><td>Adds shadow effects to elements.<br><strong>Example:</strong><br><code>box-shadow: 5px 5px 10px grey;</code></td></tr>
    <tr><td>48</td><td>CSS Text Effects</td><td>Styles for adding effects to text (shadow, glow, etc.).</td></tr>
    <tr><td>49</td><td>CSS Web Fonts</td><td>Specifies custom fonts loaded from external sources.</td></tr>
    <tr><td>50</td><td>CSS 2D Transforms</td><td>Transforms elements in 2D space (rotate, scale, translate).<br><strong>Example:</strong><br><code>transform: rotate(45deg);</code></td></tr>
    <tr><td>51</td><td>CSS 3D Transforms</td><td>Transforms elements in 3D space, adding depth.<br><strong>Example:</strong><br><code>transform: rotateY(45deg);</code></td></tr>
    <tr><td>52</td><td>CSS Transitions</td><td>Defines smooth transitions between property changes.<br><strong>Example:</strong><br><code>transition: all 0.3s ease;</code></td></tr>
    <tr><td>53</td><td>CSS Animations</td><td>Creates animations using keyframes.<br><strong>Example:</strong><br><code>@keyframes example { from {opacity: 0;} to {opacity: 1;} }</code></td></tr>
    <tr><td>54</td><td>CSS Tooltips</td><td>Styles for creating tooltip effects.</td></tr>
    <tr><td>55</td><td>CSS Style Images</td><td>Techniques for styling images.</td></tr>
    <tr><td>56</td><td>CSS Image Reflection</td><td>Creates a reflection effect on images.</td></tr>
    <tr><td>57</td><td>CSS Object-fit</td><td>Specifies how an image or video should resize to fit its container.<br><strong>Example:</strong><br><code>object-fit: cover;</code></td></tr>
    <tr><td>58</td><td>CSS Object-position</td><td>Defines the position of the content within a box.<br><strong>Example:</strong><br><code>object-position: center;</code></td></tr>
    <tr><td>59</td><td>CSS Masking</td><td>Hides part of an element using a mask.</td></tr>
    <tr><td>60</td><td>CSS Buttons</td><td>Styles for creating buttons.<br><strong>Example:</strong><br><code>button { background-color: green; }</code></td></tr>
    <tr><td>61</td><td>CSS Pagination</td><td>Styles for creating pagination in web applications.</td></tr>
    <tr><td>62</td><td>CSS Multiple Columns</td><td>Styles for creating multi-column layouts.<br><strong>Example:</strong><br><code>column-count: 3;</code></td></tr>
    <tr><td>63</td><td>CSS User Interface</td><td>Styles related to UI components.</td></tr>
    <tr><td>64</td><td>CSS Variables</td><td>Enables the use of custom properties.<br><strong>Example:</strong><br><code>--main-color: #ff0000;</code></td></tr>
    <tr><td>65</td><td>CSS @property</td><td>Defines custom properties for CSS variables.</td></tr>
    <tr><td>66</td><td>CSS Box Sizing</td><td>Controls how the total width and height of an element are calculated.<br><strong>Example:</strong><br><code>box-sizing: border-box;</code></td></tr>
    <tr><td>67</td><td>CSS Media Queries</td><td>Applies styles based on device characteristics.<br><strong>Example:</strong><br><code>@media (max-width: 600px) {}</code></td></tr>
    <tr><td>68</td><td>CSS MQ Examples</td><td>Examples of using media queries to create responsive designs.</td></tr>
    <tr><td>69</td><td>CSS Flexbox</td><td>A layout model that provides an efficient way to layout, align, and distribute space among items in a container.<br><strong>Example:</strong><br><code>display: flex;</code></td></tr>
    <tr><td>70</td><td>CSS Responsive</td><td>Styles and techniques for creating responsive designs.</td></tr>
    <tr><td>71</td><td>RWD Intro</td><td>An introduction to Responsive Web Design principles.</td></tr>
    <tr><td>72</td><td>RWD Viewport</td><td>Defines the viewport settings for responsive designs.<br><strong>Example:</strong><br><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code></td></tr>
    <tr><td>73</td><td>RWD Grid View</td><td>Techniques for creating grid layouts in responsive designs.</td></tr>
    <tr><td>74</td><td>RWD Media Queries</td><td>Using media queries to apply styles based on screen size.</td></tr>
    <tr><td>75</td><td>RWD Images</td><td>Techniques for making images responsive.</td></tr>
    <tr><td>76</td><td>RWD Videos</td><td>Techniques for making videos responsive.</td></tr>
    <tr><td>77</td><td>RWD Frameworks</td><td>Popular frameworks that support responsive design (e.g., Bootstrap).</td></tr>
    <tr><td>78</td><td>RWD Templates</td><td>Pre-designed responsive layouts.</td></tr>
    <tr><td>79</td><td>CSS Grid</td><td>A layout model that uses a grid-based approach to arrange elements.<br><strong>Example:</strong><br><code>display: grid;</code></td></tr>
    <tr><td>80</td><td>Grid Intro</td><td>An introduction to the CSS Grid layout system.</td></tr>
    <tr><td>81</td><td>Grid Container</td><td>Defines the grid container properties.</td></tr>
    <tr><td>82</td><td>Grid Item</td><td>Defines properties for grid items within the grid container.</td></tr>
    <tr><td>83</td><td>CSS Box Shadow</td><td>box-shadow</td><td>Adds shadow effects around an element's frame.</td></tr>
<tr><td>84</td><td>CSS Transition</td><td>transition</td><td>Defines the transition effect between two states of an element.</td></tr>
<tr><td>85</td><td>CSS Animation</td><td>@keyframes</td><td>Specifies the animation sequence.</td></tr>
<tr><td>86</td><td>CSS Flexbox</td><td>display: flex;</td><td>Enables flexible layouts for the container and its children.</td></tr>
<tr><td>87</td><td>CSS Grid</td><td>display: grid;</td><td>Enables grid-based layouts for the container.</td></tr>
<tr><td>88</td><td>CSS Media Queries</td><td>@media</td><td>Applies styles based on device characteristics.</td></tr>
<tr><td>89</td><td>CSS Variables</td><td>--var-name</td><td>Defines custom properties for reuse throughout a document.</td></tr>
<tr><td>90</td><td>CSS Calc Function</td><td>calc()</td><td>Calculates values dynamically using CSS.</td></tr>
<tr><td>91</td><td>CSS Custom Properties</td><td>var(--property)</td><td>Reference a custom property value.</td></tr>
<tr><td>92</td><td>CSS Z-index</td><td>z-index</td><td>Controls the stacking order of overlapping elements.</td></tr>
<tr><td>93</td><td>CSS Cursor</td><td>cursor</td><td>Specifies the type of cursor to be displayed.</td></tr>
<tr><td>94</td><td>CSS Filter</td><td>filter</td><td>Applies graphical effects like blurring or color shifting.</td></tr>
<tr><td>95</td><td>CSS Clip Path</td><td>clip-path</td><td>Defines a visible region of an element.</td></tr>
<tr><td>96</td><td>CSS Transform</td><td>transform</td><td>Applies a 2D or 3D transformation to an element.</td></tr>
<tr><td>97</td><td>CSS Transition Timing Function</td><td>transition-timing-function</td><td>Defines the speed curve of a transition effect.</td></tr>
<tr><td>98</td><td>CSS Grid Template Areas</td><td>grid-template-areas</td><td>Defines grid layout areas for the grid container.</td></tr>
<tr><td>99</td><td>CSS Grid Template Rows</td><td>grid-template-rows</td><td>Defines the row sizes of a grid container.</td></tr>
<tr><td>100</td><td>CSS Grid Template Columns</td><td>grid-template-columns</td><td>Defines the column sizes of a grid container.</td></tr>

</table>
`,
js:`<table>
<tr><th></th><th>Concept</th><th>Code/Function</th><th>Description</th></tr>
<tr><td>1</td><td>JavaScript Introduction</td><td>N/A</td><td>JavaScript is a programming language that enables interactive web pages.</td></tr>
<tr><td>2</td><td>JavaScript Where To</td><td>N/A</td><td>JavaScript can be included in HTML documents.</td></tr>
<tr><td>3</td><td>JavaScript Output</td><td>document.write()</td><td>Writes HTML expressions or JavaScript code to a document.</td></tr>
<tr><td>4</td><td>JavaScript Statements</td><td>let x = 5;</td><td>A statement is a single line of code that performs an action.</td></tr>
<tr><td>5</td><td>JavaScript Syntax</td><td>if (x > 5) {}</td><td>Defines the rules that specify a correctly structured JavaScript program.</td></tr>
<tr><td>6</td><td>JavaScript Comments</td><td>// This is a comment</td><td>Used to leave notes or explanations in the code.</td></tr>
<tr><td>7</td><td>JavaScript Variables</td><td>var name;</td><td>Used to store data values.</td></tr>
<tr><td>8</td><td>JavaScript Let</td><td>let name = 'John';</td><td>Declares a block-scoped local variable.</td></tr>
<tr><td>9</td><td>JavaScript Const</td><td>const pi = 3.14;</td><td>Declares a block-scoped constant.</td></tr>
<tr><td>10</td><td>JavaScript Operators</td><td>+</td><td>Used to perform operations on variables and values.</td></tr>
<tr><td>11</td><td>JavaScript Arithmetic</td><td>5 + 3</td><td>Performs basic arithmetic operations.</td></tr>
<tr><td>12</td><td>JavaScript Assignment</td><td>=</td><td>Assigns a value to a variable.</td></tr>
<tr><td>13</td><td>JavaScript Data Types</td><td>typeof 'Hello'</td><td>Returns the data type of a variable.</td></tr>
<tr><td>14</td><td>JavaScript Functions</td><td>function myFunction() {}</td><td>A block of code designed to perform a particular task.</td></tr>
<tr><td>15</td><td>JavaScript Objects</td><td>let car = {make: 'Ford', model: 'Mustang'};</td><td>A collection of properties and methods.</td></tr>
<tr><td>16</td><td>JavaScript Object Properties</td><td>car.make</td><td>Accesses a property of an object.</td></tr>
<tr><td>17</td><td>JavaScript Object Methods</td><td>car.start = function() {}</td><td>A function that is a property of an object.</td></tr>
<tr><td>18</td><td>JavaScript Object Display</td><td>console.log(car);</td><td>Displays the object in the console.</td></tr>
<tr><td>19</td><td>JavaScript Object Constructors</td><td>function Car(make, model) {this.make = make; this.model = model;}</td><td>Defines a template for creating objects.</td></tr>
<tr><td>20</td><td>JavaScript Events</td><td>element.addEventListener('click', function() {});</td><td>Responds to user interactions.</td></tr>
<tr><td>21</td><td>JavaScript Strings</td><td>let greeting = 'Hello';</td><td>A sequence of characters.</td></tr>
<tr><td>22</td><td>JavaScript String Methods</td><td>greeting.length</td><td>Returns the length of a string.</td></tr>
<tr><td>23</td><td>JavaScript String Search</td><td>greeting.indexOf('H')</td><td>Returns the position of the first occurrence of a specified value.</td></tr>
<tr><td>24</td><td>JavaScript String Templates</td><td>let message = Hello, ${name}!;</td><td>Template literals allow embedded expressions.</td></tr>
<tr><td>25</td><td>JavaScript Numbers</td><td>let num = 42;</td><td>Represents numerical values.</td></tr>
<tr><td>26</td><td>JavaScript BigInt</td><td>let bigNum = 1234567890123456789012345678901234567890n;</td><td>Represents integers with arbitrary precision.</td></tr>
<tr><td>27</td><td>JavaScript Number Methods</td><td>num.toString();</td><td>Converts a number to a string.</td></tr>
<tr><td>28</td><td>JavaScript Number Properties</td><td>Number.MAX_VALUE</td><td>Represents the largest possible number.</td></tr>
<tr><td>29</td><td>JavaScript Arrays</td><td>let fruits = ['apple', 'banana', 'cherry'];</td><td>A collection of items.</td></tr>
<tr><td>30</td><td>JavaScript Array Methods</td><td>fruits.push('orange');</td><td>Adds a new item to the end of an array.</td></tr>
<tr><td>31</td><td>JavaScript Array Search</td><td>fruits.indexOf('banana');</td><td>Returns the first index at which a given element can be found.</td></tr>
<tr><td>32</td><td>JavaScript Array Sort</td><td>fruits.sort();</td><td>Sorts the elements of an array.</td></tr>
<tr><td>33</td><td>JavaScript Array Iteration</td><td>fruits.forEach(item => console.log(item));</td><td>Executes a function for each array element.</td></tr>
<tr><td>34</td><td>JavaScript Array Const</td><td>const numbers = [1, 2, 3];</td><td>Declares a constant array.</td></tr>
<tr><td>35</td><td>JavaScript Dates</td><td>let today = new Date();</td><td>Represents dates and times.</td></tr>
<tr><td>36</td><td>JavaScript Date Formats</td><td>today.toISOString();</td><td>Returns the date in ISO format.</td></tr>
<tr><td>37</td><td>JavaScript Date Get Methods</td><td>today.getFullYear();</td><td>Returns the year of a date.</td></tr>
<tr><td>38</td><td>JavaScript Date Set Methods</td><td>today.setFullYear(2025);</td><td>Sets the year of a date.</td></tr>
<tr><td>39</td><td>JavaScript Math</td><td>Math.random();</td><td>Returns a random number.</td></tr>
<tr><td>40</td><td>JavaScript Random</td><td>Math.floor(Math.random() * 10);</td><td>Generates a random integer between 0 and 9.</td></tr>
<tr><td>41</td><td>JavaScript Booleans</td><td>true</td><td>Represents a logical entity with two values: true and false.</td></tr>
<tr><td>42</td><td>JavaScript Comparisons</td><td>x == y</td><td>Compares two values for equality.</td></tr>
<tr><td>43</td><td>JavaScript If Else</td><td>if (x > 5) {}</td><td>Executes a block of code based on a condition.</td></tr>
<tr><td>44</td><td>JavaScript Switch</td><td>switch (fruit) { case 'apple': }</td><td>Executes a block of code based on the value of a variable.</td></tr>
<tr><td>45</td><td>JavaScript Loop For</td><td>for (let i = 0; i < 5; i++) {}</td><td>Creates a loop that runs a specific number of times.</td></tr>
<tr><td>46</td><td>JavaScript Loop For In</td><td>for (let prop in obj) {}</td><td>Iterates over the enumerable properties of an object.</td></tr>
<tr><td>47</td><td>JavaScript Loop For Of</td><td>for (let value of array) {}</td><td>Iterates over iterable objects like arrays.</td></tr>
<tr><td>48</td><td>JavaScript Loop While</td><td>while (condition) {}</td><td>Executes a block of code as long as a specified condition is true.</td></tr>
<tr><td>49</td><td>JavaScript Break</td><td>break;</td><td>Terminates the current loop or switch statement.</td></tr>
<tr><td>50</td><td>JavaScript Iterables</td><td>N/A</td><td>Objects that can be iterated over (e.g., arrays, strings).</td></tr>
<tr><td>51</td><td>JavaScript Sets</td><td>let mySet = new Set();</td><td>Collection of unique values.</td></tr>
<tr><td>52</td><td>JavaScript Set Methods</td><td>mySet.add('value');</td><td>Adds a new element to a set.</td></tr>
<tr><td>53</td><td>JavaScript Maps</td><td>let myMap = new Map();</td><td>Collection of key-value pairs.</td></tr>
<tr><td>54</td><td>JavaScript Map Methods</td><td>myMap.set('key', 'value');</td><td>Adds a new key-value pair to a map.</td></tr>
<tr><td>55</td><td>JavaScript Typeof</td><td>typeof 'string';</td><td>Returns the data type of a variable as a string.</td></tr>
<tr><td>56</td><td>JavaScript Type Conversion</td><td>Number('123');</td><td>Converts a value to a different type.</td></tr>
<tr><td>57</td><td>JavaScript Destructuring</td><td>let {name, age} = person;</td><td>Unpacks values from arrays or properties from objects.</td></tr>
<tr><td>58</td><td>JavaScript Bitwise</td><td>5 & 3</td><td>Performs bitwise operations on numbers.</td></tr>
<tr><td>59</td><td>JavaScript RegExp</td><td>/[a-z]/</td><td>Pattern matching for strings.</td></tr>
<tr><td>60</td><td>JavaScript Precedence</td><td>1 + 2 * 3;</td><td>Determines the order of operations in expressions.</td></tr>
<tr><td>61</td><td>JavaScript Errors</td><td>throw new Error('Error!');</td><td>Handles exceptions and errors.</td></tr>
<tr><td>62</td><td>JavaScript Scope</td><td>let x = 5;</td><td>Defines the visibility of variables.</td></tr>
<tr><td>63</td><td>JavaScript Hoisting</td><td>console.log(x); var x = 5;</td><td>Variables and functions are hoisted to the top of their scope.</td></tr>
<tr><td>64</td><td>JavaScript Strict Mode</td><td>'use strict';</td><td>Enables strict parsing and error handling.</td></tr>
<tr><td>65</td><td>JavaScript this Keyword</td><td>this.name;</td><td>Refers to the current object.</td></tr>
<tr><td>66</td><td>JavaScript Arrow Function</td><td>const add = (a, b) => a + b;</td><td>A concise way to write function expressions.</td></tr>
<tr><td>67</td><td>JavaScript Classes</td><td>class Car {}</td><td>Defines a blueprint for creating objects.</td></tr>
<tr><td>68</td><td>JavaScript Modules</td><td>export default function() {}</td><td>Enables modular code organization.</td></tr>
<tr><td>69</td><td>JavaScript JSON</td><td>JSON.stringify(object);</td><td>Represents data as a string in JSON format.</td></tr>
<tr><td>70</td><td>JavaScript Debugging</td><td>debugger;</td><td>Pauses execution to inspect variables and control flow.</td></tr>
<tr><td>71</td><td>JavaScript Style Guide</td><td>N/A</td><td>Guidelines for writing consistent and maintainable code.</td></tr>
<tr><td>72</td><td>JavaScript Best Practices</td><td>N/A</td><td>Recommendations for effective coding techniques.</td></tr>
<tr><td>73</td><td>JavaScript Mistakes</td><td>N/A</td><td>Common pitfalls to avoid while coding.</td></tr>
<tr><td>74</td><td>JavaScript Performance</td><td>N/A</td><td>Tips to optimize code for better performance.</td></tr>
<tr><td>75</td><td>JavaScript Reserved Words</td><td>let, const, if, else, for</td><td>Words that cannot be used as identifiers.</td></tr>
<tr><td>76</td><td>JavaScript Async/Await</td><td>async function fetchData() { await response.json(); }</td><td>Simplifies working with asynchronous code.</td></tr>
<tr><td>77</td><td>JavaScript Callbacks</td><td>function callback() {}</td><td>A function passed as an argument to another function.</td></tr>
<tr><td>78</td><td>JavaScript Asynchronous</td><td>setTimeout(function() {}, 1000);</td><td>Code that executes after a certain amount of time.</td></tr>
<tr><td>79</td><td>JavaScript AJAX</td><td>const xhr = new XMLHttpRequest();</td><td>Asynchronous JavaScript and XML for data retrieval.</td></tr>
<tr><td>80</td><td>JavaScript JSON Parse</td><td>JSON.parse(jsonString);</td><td>Converts a JSON string into a JavaScript object.</td></tr>
<tr><td>81</td><td>JavaScript JSON Stringify</td><td>JSON.stringify(object);</td><td>Converts a JavaScript object into a JSON string.</td></tr>
<tr><td>82</td><td>JavaScript JSON vs XML</td><td>N/A</td><td>Comparison of JSON and XML as data interchange formats.</td></tr>
<tr><td>83</td><td>JavaScript JSON Server</td><td>N/A</td><td>Simulates a backend for testing JSON APIs.</td></tr>
<tr><td>84</td><td>JavaScript jQuery</td><td>$('.selector');</td><td>A fast, small, and feature-rich JavaScript library.</td></tr>
<tr><td>85</td><td>JavaScript Graphics</td><td>let canvas = document.getElementById('myCanvas');</td><td>Draws graphics on a web page.</td></tr>
<tr><td>86</td><td>JavaScript Chart.js</td><td>new Chart(ctx, config);</td><td>A library for creating dynamic charts and graphs.</td></tr>
<tr><td>87</td><td>JavaScript D3.js</td><td>d3.select('div');</td><td>A JavaScript library for visualizing data with HTML, SVG, and CSS.</td></tr>
<tr><td>88</td><td>JavaScript Error Handling</td><td>try { /* code */ } catch (error) { /* handle error */ }</td><td>Handles errors using try, catch, and finally blocks.</td></tr>
<tr><td>89</td><td>JavaScript Fetch API</td><td>fetch('url').then(response => response.json());</td><td>Interface for fetching resources across the network.</td></tr>
<tr><td>90</td><td>JavaScript Local Storage</td><td>localStorage.setItem('key', 'value');</td><td>Saves data in the browser with no expiration time.</td></tr>
<tr><td>91</td><td>JavaScript Session Storage</td><td>sessionStorage.setItem('key', 'value');</td><td>Saves data for the duration of the page session.</td></tr>
<tr><td>92</td><td>JavaScript Prototypes</td><td>function MyObj() { }; MyObj.prototype.method = function() { };</td><td>Adds properties and methods to existing objects.</td></tr>
</table>
`
};


// Function to display the cheat sheet
let currentTab = null; // Keep track of the current open tab

// Function to show or toggle the cheat sheet
function showSheet(library) {
    const cheatsheetDiv = document.getElementById('cheatsheet');

    if (currentTab === library) {
        // If the same tab is clicked, close the cheat sheet
        cheatsheetDiv.innerHTML = '';
        currentTab = null; // Reset the current tab
    } else {
        // Load the selected cheat sheet
        cheatsheetDiv.innerHTML = cheatSheets[library];
        currentTab = library; // Update the current tab
    }
}

// Adding event listeners to the buttons
document.getElementById('htmlTab').addEventListener('click', function() {
    showSheet('html');
});
document.getElementById('cssTab').addEventListener('click', function() {
    showSheet('css');
});
document.getElementById('jsTab').addEventListener('click', function() {
    showSheet('js');
});
// Download button functionality
document.getElementById('downloadBtn').addEventListener('click', function() {
    const blob = new Blob([document.getElementById('cheatsheet').innerHTML], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'cheatsheet.html';
    link.click();
});
