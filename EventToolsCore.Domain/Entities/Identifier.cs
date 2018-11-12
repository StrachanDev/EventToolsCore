using EventToolsCore.Domain.Utilities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace EventToolsCore.Domain
{
    [TypeConverter(typeof(IdentifierConverter))]
    public class Identifier
    {
        private string m_id;

        private static Identifier s_empty = new Identifier();

        public Identifier()
        {
            m_id = null;
        }

        public Identifier(string id)
        {
            m_id = id;
        }

        public Identifier(int id)
        {
            m_id = id.ToString();
        }

        public bool IsEmpty()
        {
            return string.IsNullOrWhiteSpace(m_id);
        }

        public static Identifier Empty()
        {
            return s_empty;
        }

        public static implicit operator Identifier(string id)
        {
            return new Identifier(id);
        }

        public static implicit operator Identifier(int id)
        {
            return new Identifier(id);
        }

        public static implicit operator string(Identifier id)
        {
            return id?.m_id ?? throw new InvalidCastException($"Attempted to convert NULL to a string identifier"); ;
        }

        public static implicit operator int(Identifier id)
        {
            if (int.TryParse(id.m_id, out var result))
            {
                return result;
            }
            else
            {
                throw new InvalidCastException($"Attempted to convert {id.m_id} to an int identifier value.");
            }
        }
    }
}
