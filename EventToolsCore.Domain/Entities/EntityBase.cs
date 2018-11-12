using System;

namespace EventToolsCore.Domain
{
    public abstract class EntityBase
    {
        public Identifier Id { get; set; }

        public string Name { get; set; }
    }
}
