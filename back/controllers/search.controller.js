// Import necessary modules
const { DiplomaCourse } = require("../models/diplomaCourse.model");
const { eventModel } = require("../models/event.model");
const { laboratoryMembersModel  } = require("../models/laboratoryMembers.model");
const { nationalProjectModel } = require("../models/nationalProject.model");
const { newsModel } = require("../models/news.model");
const { researcherModel   } = require("../models/researchTeam.model");
const { ScientificCouncilMembersModel } = require("../models/scientificCouncilMembers.model");
const { ScientificProduction } = require("../models/scientificProduction.model");
 
// Define search function
const searchAllCollections = async (req, res) => {
  const query = req.params.query; // Get the search query from the request
  const searchPattern = new RegExp(query, 'i');
  let result = {
    laboratoryMembers: [],
    researchTeam: [],
    scientificProduction: [],
    scientificCouncilMembers: [],
    diplomaCourse: [],
    nationalProject: [],
    news: [],
    events: [],
  };

  try {
    const laboratoryMembersPromise = laboratoryMembersModel.aggregate([
      {
        $match: {
          $or: [
            { 'name.ar': { $regex: searchPattern } },
            { 'name.fr': { $regex: searchPattern } },
            { 'name.en': { $regex: searchPattern } },
            { email: { $regex: searchPattern } },
            { orcid: { $regex: searchPattern } },
            { 'grade.ar': { $regex: searchPattern } },
            { 'grade.fr': { $regex: searchPattern } },
            { 'grade.en': { $regex: searchPattern } },
            { affiliation: { $regex: searchPattern } },
          ]
        }
      }
    ]);

    const researcherTeamPromise = researcherModel.aggregate([
      {
        $match: {
          $or: [
            { 'name.ar': { $regex: searchPattern } },
            { 'name.fr': { $regex: searchPattern } },
            { 'name.en': { $regex: searchPattern } },
            { email: { $regex: searchPattern } },
            { orcid: { $regex: searchPattern } },
            { cv: { $regex: searchPattern } },
            { 'speciality.ar': { $regex: searchPattern } },
            { 'speciality.fr': { $regex: searchPattern } },
            { 'speciality.en': { $regex: searchPattern } },
          ]
        }
      }
    ]);

    const scientificCouncilMembersPromise = ScientificCouncilMembersModel.aggregate([
      {
        $match: {
          $or: [
            { 'president.fr': { $regex: searchPattern } },
            { 'president.en': { $regex: searchPattern } },
            { 'president.ar': { $regex: searchPattern } },
            { 'rapporteur.fr': { $regex: searchPattern } },
            { 'rapporteur.en': { $regex: searchPattern } },
            { 'rapporteur.ar': { $regex: searchPattern } },
            { 'Responsables_des_structures_RDI.fr': { $regex: searchPattern } },
            { 'Responsables_des_structures_RDI.en': { $regex: searchPattern } },
            { 'Responsables_des_structures_RDI.ar': { $regex: searchPattern } },
            { 'managersOfSpecializedUnits.fr': { $regex: searchPattern } },
            { 'managersOfSpecializedUnits.en': { $regex: searchPattern } },
            { 'managersOfSpecializedUnits.ar': { $regex: searchPattern } },
            { 'representativesOfResearchers.fr': { $regex: searchPattern } },
            { 'representativesOfResearchers.en': { $regex: searchPattern } },
            { 'representativesOfResearchers.ar': { $regex: searchPattern } },
            { 'representativeOfIresa.fr': { $regex: searchPattern } },
            { 'representativeOfIresa.en': { $regex: searchPattern } },
            { 'representativeOfIresa.ar': { $regex: searchPattern } },
            { 'representativesOfAgriculturalResearchAndHigherEducationEstablishments.fr': { $regex: searchPattern } },
            { 'representativesOfAgriculturalResearchAndHigherEducationEstablishments.en': { $regex: searchPattern } },
            { 'representativesOfAgriculturalResearchAndHigherEducationEstablishments.ar': { $regex: searchPattern } },
            { 'representativeOfInrat.fr': { $regex: searchPattern } },
            { 'representativeOfInrat.en': { $regex: searchPattern } },
            { 'representativeOfInrat.ar': { $regex: searchPattern } },
            { 'representativeOfINRGREF.fr': { $regex: searchPattern } },
            { 'representativeOfINRGREF.en': { $regex: searchPattern } },
            { 'representativeOfINRGREF.ar': { $regex: searchPattern } },
            { 'representativeOfIO.fr': { $regex: searchPattern } },
            { 'representativeOfIO.en': { $regex: searchPattern } },
            { 'representativeOfIO.ar': { $regex: searchPattern } },
            { 'representativeOfCtab.fr': { $regex: searchPattern } },
            { 'representativeOfCtab.en': { $regex: searchPattern } },
            { 'representativeOfCtab.ar': { $regex: searchPattern } },
          ]
        }
      }
    ]);

    const scientificProductionPromise = ScientificProduction.aggregate([
      {
        $match: {
          $or: [
            { 'title.ar': { $regex: searchPattern } },
            { 'title.fr': { $regex: searchPattern } },
            { 'title.en': { $regex: searchPattern } },
            { 'authors.ar': { $regex: searchPattern } },
            { 'authors.fr': { $regex: searchPattern } },
            { 'authors.en': { $regex: searchPattern } },
            { 'journal.name.ar': { $regex: searchPattern } },
            { 'journal.name.fr': { $regex: searchPattern } },
            { 'journal.name.en': { $regex: searchPattern } },
            { 'published_date.ar': { $regex: searchPattern } },
            { 'published_date.fr': { $regex: searchPattern } },
            { 'published_date.en': { $regex: searchPattern } },
          ]
        }
      }
    ]);

    const diplomaCoursePromise = DiplomaCourse.aggregate([
      {
        $match: {
          $or: [
            { 'type.ar': { $regex: searchPattern } },
            { 'type.fr': { $regex: searchPattern } },
            { 'type.en': { $regex: searchPattern } },
            { 'auteur.ar': { $regex: searchPattern } },
            { 'auteur.fr': { $regex: searchPattern } },
            { 'auteur.en': { $regex: searchPattern } },
            { 'titre.ar': { $regex: searchPattern } },
            { 'titre.fr': { $regex: searchPattern } },
            { 'titre.en': { $regex: searchPattern } },
            { 'specialite.ar': { $regex: searchPattern } },
            { 'specialite.fr': { $regex: searchPattern } },
            { 'specialite.en': { $regex: searchPattern } },
            { 'directeur.ar': { $regex: searchPattern } },
            { 'directeur.fr': { $regex: searchPattern } },
            { 'directeur.en': { $regex: searchPattern } },
            { 'etablissement.ar': { $regex: searchPattern } },
            { 'etablissement.fr': { $regex: searchPattern } },
            { 'etablissement.en': { $regex: searchPattern } },
          ]
        }
      }
    ]);



    const nationalProjectPromise = nationalProjectModel.aggregate([
      {
        $match: {
          $or: [
            { 'title.fr': { $regex: searchPattern } },
            { 'title.ar': { $regex: searchPattern } },
            { 'title.en': { $regex: searchPattern } },
            { 'cordinator.fr': { $regex: searchPattern } },
            { 'cordinator.ar': { $regex: searchPattern } },
            { 'cordinator.en': { $regex: searchPattern } },
            { 'duration': { $regex: searchPattern } },
          ]
        }
      }
    ]);


    const newsPromise = newsModel.aggregate([
      {
        $match: {
          $or: [
            { 'title.fr': { $regex: searchPattern } },
            { 'title.ar': { $regex: searchPattern } },
            { 'title.en': { $regex: searchPattern } },
            { 'description.fr': { $regex: searchPattern } },
            { 'description.ar': { $regex: searchPattern } },
            { 'description.en': { $regex: searchPattern } },
          ]
        }
      }
    ]);

    const eventsPromise = eventModel.aggregate([
      {
        $match: {
          $or: [
            { 'title.fr': { $regex: searchPattern } },
            { 'title.ar': { $regex: searchPattern } },
            { 'title.en': { $regex: searchPattern } },
            { 'description.fr': { $regex: searchPattern } },
            { 'description.ar': { $regex: searchPattern } },
            { 'description.en': { $regex: searchPattern } },
          ]
        }
      }
    ]);





    const [
      laboratoryMembers,
      researchTeam,
      scientificCouncilMembers,
      scientificProduction,
      diplomaCourse,
      nationalProject,
      news,
      events
      // Add more promises here for other collections as needed
    ] = await Promise.all([
      laboratoryMembersPromise,
      researcherTeamPromise,
      scientificCouncilMembersPromise,
      scientificProductionPromise,
      diplomaCoursePromise,
      nationalProjectPromise,
      newsPromise,
      eventsPromise
      // Add more promises here for other collections as needed
    ]);

    result.laboratoryMembers = laboratoryMembers;
    result.researchTeam = researchTeam;
    result.scientificCouncilMembers = scientificCouncilMembers;
    result.scientificProduction = scientificProduction;
    result.diplomaCourse = diplomaCourse;
    result.nationalProject = nationalProject;
    result.news = news;
    result.events = events;
    // Assign results for other collections here

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while searching collections' });
  }
};


module.exports = { searchAllCollections };
