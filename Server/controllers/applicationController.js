// --- Logic for Application Routes ---
const CspApplication = require('../models/CspApplication');

// @desc    Submit a new CSP application
exports.createApplication = async (req, res) => {
    try {
        // req.body contains the text fields
        // req.file contains the uploaded photo info
        
        if (!req.file) {
            return res.status(400).json({ msg: 'Please upload a photo' });
        }

        const newApplication = new CspApplication({
            ...req.body,
            photoPath: req.file.path // Save the path to the photo
        });

        await newApplication.save();

        res.status(201).json({ msg: 'Application submitted successfully' });

    } catch (err) {
        console.error(err.message);
        // Handle duplicate key errors (e.g., email or aadhar)
        if (err.code === 11000) {
            return res.status(400).json({ msg: 'Email or Aadhar number already exists' });
        }
        res.status(500).send('Server Error');
    }
};

// @desc    Get all CSP applications (Admin only)
exports.getApplications = async (req, res) => {
    try {
        // Find all applications, exclude photoPath for listing for performance
        const applications = await CspApplication.find().select('-photoPath').sort({ createdAt: -1 });
        res.json(applications);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Update application status (Admin only)
// @route   PUT api/applications/:id/status
exports.updateApplicationStatus = async (req, res) => {
    try {
        const application = await CspApplication.findById(req.params.id);
        
        if (!application) {
            return res.status(404).json({ msg: 'Application not found' });
        }

        const { status } = req.body;
        if (status) {
            application.status = status;
            await application.save();
            return res.json(application);
        }

        return res.status(400).json({ msg: 'Status field required' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Delete a CSP application (Admin only)
// @route   DELETE api/applications/:id
exports.deleteApplication = async (req, res) => {
    try {
        const application = await CspApplication.findByIdAndDelete(req.params.id);

        if (!application) {
            return res.status(404).json({ msg: 'Application not found' });
        }

        // TODO: Optionally, delete the uploaded file from the 'uploads' folder here

        res.json({ msg: 'Application removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
