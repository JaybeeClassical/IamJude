/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// maybe i might use it, so i'm keeping it
import "./src/style.css"
import "./node_modules/bootstrap/dist/css/bootstrap.css";
import "./node_modules/font-awesome/css/font-awesome.min.css";


export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `This application has been updated. ` +
        `Reload to display the latest version?`
    )

    if (answer === true) {
        window.location.reload()
    }
}