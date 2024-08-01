# Chrome-RTL-Toggle [RTL Converter Chrome Extension]
RTL Converter is a simple and efficient Chrome extension that allows users to toggle the text direction of web pages between Left-to-Right (LTR) and Right-to-Left (RTL) with a single click.
In the Farsi (Persian) context across the web, I often encountered issues when trying to read mixed texts. I installed many extensions, but they didn't work on all websites. To address this problem, I created this solution for others facing similar challenges. [Farsi, Arabic and ...]


## Features

- Toggle between LTR and RTL text direction on any web page
- Visual indicator (icon change) to show current text direction state
- Works on all websites
- Lightweight and fast
- Tested websites: X.com, Claude, ChatGPT

## Installation

To install the RTL Converter extension in developer mode:

1. Clone this repository or download the source code as a ZIP file and extract it.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

The RTL Converter extension should now appear in your Chrome toolbar.

## Usage

Using the RTL Converter extension is straightforward:

1. Navigate to any web page you want to convert to RTL.
2. Click the RTL Converter icon in your Chrome toolbar.
   - The first click will change the text direction to RTL.
   - The icon will change to indicate that RTL is active.
3. Click the icon again to revert to the original LTR direction.
   - The icon will change back to its original state.

## How It Works

The extension injects a CSS rule `*{direction:rtl}` into the current web page when activated. This rule applies the RTL direction to all elements on the page. When deactivated, the extension removes this injected CSS, reverting the page to its original state.

## Compatibility

This extension is compatible with Chrome 88 and later versions, as it uses **Manifest V3**.
As you see this extension is updated to latest Manifest version.

## Contributing

Contributions to improve RTL Converter are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have any questions, please file an issue on the GitHub repository.

