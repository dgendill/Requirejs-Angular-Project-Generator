describe('Project', function() {

    var Project, root, child;

    beforeEach(function(done) {

        require(['Project'], function(P) {
            Project = P;
            root = new Project('Root');
            child = new Project('Child');
            done();
        });

    });

    it('should be an instance of itself.', function() {
        expect(root instanceof Project).toBe(true);
    });

    it('should be able to add a child project to itself.', function() {
        root.add(child);
        expect(root.hasChild(child)).toBe(true);
    });

    it('should be able to remove a child project from itself.', function() {
        root.remove(child);
        expect(root.hasChild(child)).toBe(false);
    });

});
