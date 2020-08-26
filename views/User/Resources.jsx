const React = require('react');
const Default = require('../Components/Default.jsx');

class Resources extends React.Component {
    render() {
        return (
            <Default>
            <div>
            <div className="grid-container2">
                {/* Logo */}
                <div className="Log-Placeholder">
                            <img className="Logo" src="https://i.imgur.com/RxOMcaH.png"></img>
                    </div>
                {/* Log In */}
                <div className="Log-In">
                            <form id="login" method="get" action="login.php">
                                <label>User Name</label><br/>
                                <input type="text" name="Uname" id="Uname" placeholder="Username" />
                                <br /><br />
                                <label>Password</label><br/>
                                <input type="Password" name="Pass" id="Pass" placeholder="Password" />
                                <br /><br />
                                <input type="checkbox" id="check" />
                                <span>Remember me</span>
                                <br /><br />
                                <a className="forgotPass" href="#">Forgot Password</a>
                            </form>
                        </div>
                        <div className="Site-Info">
                            <h1>Resources</h1>
                            <p className="pColor">Every Herp Keeper should know they're only as good as the knowledge they know, and thus should always be actively learning. There are quite a variety of resources and as such, they've been compiled here.</p>
                            <h1>Husbandry</h1>
                            <ul className="resource">
                                <a className="resource" href="http://www.vspn.org/LIBRARY/WWWDirectory/Reptile.htm/">An Extensive list of Husbandry Resources</a><br/>
                                <a className="resource" href="http://www.uvguide.co.uk/">Great Source for UVB Bulb Questions</a><br/>
                                <a className="resource" href="https://reptifiles.com/">An Extensive List of Reptile Care Guides</a><br/>
                                <a className="resource" href="http://www.ebd.csic.es/documents/240051/1006352/amphibian_husbandry_resource_guide_1.0-1.pdf/77a6fd79-94d1-49cf-bad6-7e6310b842d3">An AZA made Amphibian Husbandry Resource</a><br/>
                                <a className="resource" href="http://www.australasianzookeeping.org/Husbandry_Manuals_Amphibians.htm">A website compiling many Husbandry Resources for download</a><br/>
                            </ul>
                            <h1>Enrichment</h1>
                            <ul className="resource">
                                <a className="resource" href="https://www.aazk.org/wp-content/uploads/Suggested-Guidelines-for-Reptile-Enrichment.pdf">AAZK Guidelines for Reptile Enrichment</a><br/>
                                <a className="resource" href="https://fall2019.iaabcjournal.org/puzzle-feeding-for-snakes/">A personal blog with some nice examples of Enrichment</a><br/>
                                <a className="resource" href="http://www.natureboxpetemporium.com/blog/environmental-enrichment-for-captive-snakes/">Contains some great Enrichment ideas and examples</a><br/>
                                <a className="resource" href="https://www.researchgate.net/publication/263226031_The_importance_of_enrichment_for_advancing_amphibian_welfare_and_conservation_goals_A_review_of_a_neglected_topic">Amphibian Enrichment Journal Article</a><br/>
                                <a className="resource" href="https://pdfs.semanticscholar.org/b537/4a32589cc4a8a23834c492ecb14cc63cc1f7.pdf">An Interesting read about Herpetofauna Enrichment</a><br/>
                                <a className="resource" href="http://www.enrichment.org/MiniWebs/Australasia/workshop01.pdf">Another good Enrichment source</a>
                            </ul>
                            <h1>Training</h1>
                            <ul className="resource">
                                <a className="resource" href="https://www.vetfolio.com/learn/article/the-benefits-of-training-and-enrichment-for-reptiles-who-knew">A Good source for some insight into Herp Training</a><br/>
                                <a className="resource" href="https://www.facebook.com/Reptelligence/">Reptelligence: Focuses on Training and Enrichment</a><br/>
                            </ul>
                            <hr></hr>
                            <h1>Enjoy socializing with like-minded people?</h1>
                            <p className="pColor">Below is a list of some great facebook groups that provide quality care advice and have some very top-notch figures within.</p>
                            <ul className="resource">
                                <a className="resource" href="https://www.facebook.com/groups/AdvancingHerpHusbandry/">A phenomenal group that also focuses in more unique species</a><br/>
                                <a className="resource" href="https://www.facebook.com/groups/cyclurafriends/">For those passionate about Cyclura</a><br/>
                                <a className="resource" href="https://www.facebook.com/groups/1491231621156887/">Great group for keepers with a focus in rare and uncommon</a><br/>
                                <a className="resource" href="https://www.facebook.com/groups/2326326320721418/">Another rare and uncommon group</a><br/>
                                <a className="resource" href="https://www.facebook.com/groups/240714813066320/">Good source for venomous keepers of any level</a><br/>
                                <a className="resource" href="https://www.facebook.com/groups/BRASUS/">Great Bioactive Setup Group</a><br/>
                                <a className="resource" href="https://www.facebook.com/groups/reptileenrichmentandtraining/">Another Reptile Enrichment and Training Group</a><br/>
                                <a className="resource" href="https://www.facebook.com/groups/1477609882345971/">Great group for Crocodilian lovers</a><br/>
                                <a className="resource" href="https://www.facebook.com/groups/872982909435439/">DIY Cage and Background Group</a><br/>
                                <a className="resource" href="https://www.facebook.com/groups/476195805756830/">Another group for those with an interest in Venomous snakes</a><br/>
                                <a className="resource" href="https://www.facebook.com/groups/BioactiveVivs/">Another Bioactive Exhibit Group</a><br/>
                                <a className="resource" href="https://www.facebook.com/groups/crocandgatorkeepers/">A group for crocodilian keepers</a><br/>
                                <a className="resource" href="https://www.facebook.com/groups/2415020071888374/">A good resource to see reviews when purchasing herpetofauna from an individual or company</a><br/>
                                <a className="resource" href="https://www.facebook.com/groups/342910095878787/">Another very good resource to see reviews about an individual or company</a>
                            </ul>
                        </div>
                        {/* Nav Bar */}
                        <div className="Nav-bar">
                            <nav className="navigation">
                                <ul className="mainmenu">
                                    <li><a  href="/">Home</a></li>
                                    <li><a href="/new">New Record</a></li>
                                    <li><a>About HerpKeeper</a>
                                        <ul className="submenu">
                                            <li><a href="/Site">About the Site</a></li>
                                            <li><a href="/Developer">About the Developer</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/Resources">Resources</a></li>
                                </ul>
                            </nav>
                        </div>
                        {/* Social Media */}
                        <div className="Social-Media">
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-instagram"></a>
                            <a href="#" class="fa fa-twitter"></a>
                        </div>
                </div>
            </div>
        </Default>
        )
    }
}

module.exports = Resources;